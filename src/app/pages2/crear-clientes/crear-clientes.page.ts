import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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

  selectedCliente: Cliente | null = null;
  userInfo: any;
  datos: any; // Variable para almacenar los datos de la API

  constructor(private apiService: ClientService, private storage: Storage, private router: Router, private navCtrl: NavController) {}



  search() {
    // Lógica de búsqueda
    console.log('Realizando búsqueda...');
  }

  async ionViewWillEnter() {

    this.apiService.getWithToken().subscribe({
      next: (response) => {

        this.datos = response;
        console.log(this.datos);
      },
      error: (error) => {

        console.error('Error al obtener datos de la API:', error);
      },
    });

  }

  crearVisita(clienteId: number) {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      this.userInfo = JSON.parse(userInfoString);
      const empleadoId = this.userInfo['user-id'];
      const tipoVisita = 'A'
      this.navCtrl.navigateForward('/crear-visitas', {
        queryParams: {
          cliente_id: clienteId,
          empleado_id: empleadoId,
          tipo_visita: tipoVisita
        }
      });
    }
  }
}
