import { Component } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { format } from 'date-fns';
import { VisitaService } from 'src/app/services/visita.service';
import { DescripcionProductosPage } from '../descripcion-productos/descripcion-productos.page';
import { VentaService } from 'src/app/services/venta.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-visitas-agendadas',
  templateUrl: './visitas-agendadas.page.html',
  styleUrls: ['./visitas-agendadas.page.scss'],
})


export class VisitasAgendadasPage {
  formatDate(date: Date): string {
    return format(date, 'dd/MM/yyyy');
  }
  selectedDate: any | null = null;
  mostrarLista: boolean = false; // Inicialmente, ocultamos la lista
  dateExample = new Date().toISOString();
  visitas: any[] = [];
  acordeonAbierto: number | null = null;
  idEjecutivo: number = 0;
  cliente = {
    nombre: 'Nombre del Cliente',
    rut: 'RUT del Cliente',
    direccion: 'Dirección del Cliente',
    id: 'ID del Cliente'
  };
  constructor(private alertController: AlertController, private modalController: ModalController,
    private visitasService: VisitaService, public navCtrl: NavController) {

    }




  ngOnInit(): void {
    //console.log(this.dateExample);
  }

  reprogramarVisita(visitaId: number) {
    this.navCtrl.navigateForward('/reprogramar-visitas', {
      queryParams: { id: visitaId }
    });
  }

  finalizarVisita(visitaId: number) {

    this.visitasService.finalizarVisita(visitaId).subscribe(
      response => {

        this.presentarModal('Visita finalizada con éxito' , true)
      },
      error => {
        if (error.status === 400) {
          // Aquí es donde puedes acceder al mensaje de error
          this.presentarModal(error.error.message, false)
        }
      }
    );
  }

  cancelarVisita(visitaId: number) {
    // Llamada al servicio para cancelar la visita
    this.visitasService.cancelarVisita(visitaId).subscribe(
      response => {
        this.presentarModal('Visita cancelada con éxito' , true)
        // Manejar respuesta exitosa aquí
      },
      error => {
        if (error.status === 400) {
          // Aquí es donde puedes acceder al mensaje de error
          this.presentarModal(error.error.message, false)
        }
      }
    );
  }

  async presentarModal(mensaje: string, esExito: boolean) {
    const modal = await this.modalController.create({
      component: DescripcionProductosPage,
      cssClass: 'popup-modal-style',
      componentProps: {
        'titulo': esExito ? 'Éxito' : 'Error',
        'mensaje': mensaje
      }
    });
    return await modal.present();
  }
  toggleAcordeon(i: number) {
    if (this.acordeonAbierto === i) {
      this.acordeonAbierto = null; // Cierra el acordeón si se hace clic nuevamente en él
    } else {
      this.acordeonAbierto = i; // Abre el acordeón correspondiente
    }
  }

  realizarVenta(visita: any, cliente: any) {
    console.log(visita);
    this.idEjecutivo = 200;
    this.navCtrl.navigateForward('/venta', {
      queryParams: {
        clienteNombre: cliente.nombre,
        clienteRut: cliente.rut,
        clienteDireccion: cliente.direccion,
        clienteId: cliente.id,
        visitaId: visita.id,
        ejecutivoId: this.idEjecutivo
      }
    });
  }


  async dismissModal() {
    await this.modalController.dismiss(); // Cierra el modal
    const partes = this.dateExample.split('T')[0].split('-');
    const fechaFormateada = `${partes[2]}-${partes[1]}-${partes[0]}`;
    console.log(fechaFormateada);
    this.visitasService.getVisitasByDate(fechaFormateada).subscribe({
      next: (data) => {
        console.log(data);
        this.visitas = data;
      },
      error: (error) => {
        console.error('Error al obtener las visitas:', error);
      },
      complete: () => {
        // Manejar la notificación de completa (opcional)
      }
    });

  }

}
