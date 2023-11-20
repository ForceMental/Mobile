import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VisitaService } from 'src/app/services/visita.service';
import { DescripcionProductosPage } from '../descripcion-productos/descripcion-productos.page';

@Component({
  selector: 'app-crear-visitas',
  templateUrl: './crear-visitas.page.html',
  styleUrls: ['./crear-visitas.page.scss'],
})
export class CrearVisitasPage {
  formulario: any = {
    tipo_visita: null,
    cliente_id: null,
    empleado_id: null,
  };
  dateExample = new Date().toISOString();
  constructor(private route: ActivatedRoute, private modalController: ModalController, private visitaService: VisitaService) {}

  ngOnInit() {
    // Obtén los parámetros pasados desde la página anterior
    this.route.queryParams.subscribe(params => {
      const clienteId = params['cliente_id'];
      const empleadoId = params['empleado_id'];
      const tipoVisita = params['tipo_visita'];

      // Ahora puedes usar estos valores en tu formulario
      this.formulario = {
        tipo_visita: tipoVisita,
        cliente_id: clienteId,
        empleado_id: empleadoId,
      };
    });
  }

  async dismissModal() {
    await this.modalController.dismiss(); // Cierra el modal
  }


  enviarFormulario() {

    const partes = this.dateExample.split('T')[0].split('-');
    const fechaFormateada = `${partes[0]}-${partes[1]}-${partes[2]}`;
    console.log(this.dateExample);

    const formularioCompleto = {
      ...this.formulario,
      fecha_visita: fechaFormateada,
    };
    this.visitaService.crearVisita(formularioCompleto).subscribe({
      next: (response) => {
        // Maneja la respuesta del servidor aquí
        console.log('Solicitud POST exitosa', response);
        this.presentarModal('Exito al crear cliente', true)
      },
      error: (error) => {
        // Maneja los errores de la solicitud aquí
        console.error('Error en la solicitud POST', error);
        this.presentarModal('Error al crear cliente', false)
      }
    });
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




