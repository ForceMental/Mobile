import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VisitaService } from 'src/app/services/visita.service';
import { DescripcionProductosPage } from '../descripcion-productos/descripcion-productos.page';
@Component({
  selector: 'app-reprogramar-visitas',
  templateUrl: './reprogramar-visitas.page.html',
  styleUrls: ['./reprogramar-visitas.page.scss'],
})
export class ReprogramarVisitasPage implements OnInit {
  visitaId: number = 0;
  dateExample = new Date().toISOString();
  constructor(private route: ActivatedRoute, private modalController: ModalController,
    private visitasService: VisitaService, ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.visitaId = params['id'];
        console.log(this.visitaId);
        // Aquí puedes hacer algo con el visitaId, como cargar datos de la visita
      }
    });
  }

  async dismissModal() {
    await this.modalController.dismiss(); // Cierra el modal
    const partes = this.dateExample.split('T')[0].split('-');
    const fechaFormateada = `${partes[2]}-${partes[1]}-${partes[0]}`;
    console.log(fechaFormateada);

    this.manejarReprogramacion(this.visitaId, fechaFormateada);


  }

  manejarReprogramacion(visitaId: number, fecha: string) {
    const nuevaFecha = fecha; // Reemplaza con la fecha elegida por el usuario
    this.visitasService.reprogramarVisita(visitaId, nuevaFecha).subscribe(
      response => {
        this.presentarModal('Visita reprogramada con éxito.', true);
      },
      error => {
        this.presentarModal('Error al reprogramar visita.', false);
        // Manejar errores aquí
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

}
