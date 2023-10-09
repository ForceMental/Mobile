import { Component } from '@angular/core';

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
}
