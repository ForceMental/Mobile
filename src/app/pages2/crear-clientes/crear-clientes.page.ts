import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Storage } from '@ionic/storage-angular';
interface Cliente {
  numeroCliente: string;
  nombres: string;
  apellidos: string;
  rut: string;
  correo: string;
  telefono: number;
  direccion: string;
}

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.page.html',
  styleUrls: ['./crear-clientes.page.scss'],
})
export class CrearClientesPage {
  searchTerm: string = '';
  clientes: Cliente[] = [
    { numeroCliente: '40', nombres: 'Juan Ignacio', apellidos: 'Perez Vergara', rut: '14848859-8', correo: 'juan@gmail.com', telefono: 973537433, direccion: 'Viña del Mar' },
    { numeroCliente: '11', nombres: 'Maria', apellidos: 'Lopez', rut: '15758585-4', correo: 'Maria@gmail.com', telefono: 994737831, direccion: 'Quilpue' }
  ];

  selectedCliente: Cliente | null = null;
  token: string = ''; // Variable para almacenar el token de acceso
  datos: any; // Variable para almacenar los datos de la API

  constructor(private apiService: ClientService, private storage: Storage) {}

  filterItems(event: any) {
    const searchTerm = event.detail.value.toLowerCase();
    if (searchTerm) {
      const filteredCliente = this.clientes.find(cliente =>
        cliente.nombres.toLowerCase().includes(searchTerm) ||
        cliente.apellidos.toLowerCase().includes(searchTerm) ||
        cliente.rut.includes(searchTerm)
      );
      this.selectedCliente = filteredCliente ? { ...filteredCliente } : null;
    } else {
      this.selectedCliente = null;
    }
  }

  search() {
    // Lógica de búsqueda
    console.log('Realizando búsqueda...');
  }

  async ionViewWillEnter() {
    // Obtiene el token de acceso del almacenamiento de Ionic
    this.token = await this.storage.get('access_token');

    if (this.token) {
      // Si se obtiene el token, realiza la solicitud a la API
      this.apiService.getWithToken(this.token).subscribe({
        next: (response) => {
          // Almacena los datos de la API en la variable 'datos'
          this.datos = response;
        },
        error: (error) => {
          // Maneja los errores de la solicitud
          console.error('Error al obtener datos de la API:', error);
        },
      });
    }
  }
}
