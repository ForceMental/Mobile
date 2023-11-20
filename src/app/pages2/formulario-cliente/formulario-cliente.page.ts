import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
import { DescripcionProductosPage } from '../descripcion-productos/descripcion-productos.page';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.page.html',
  styleUrls: ['./formulario-cliente.page.scss'],
})
export class FormularioClientePage implements OnInit {
  formData: any = {
    nombre: 'aaa',
    apellido: '',
    telefono: '',
    correo_electronico: '',
    direccion: '',
    rut: '',
    comuna: 1,
  };
  token: string = '';

  constructor(
    private apiService: ClientService,
    private alertController: AlertController,
    private modalController: ModalController,
  ) {}

  ngOnInit() {}

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmar Envío',
      message: '¿Deseas enviar el formulario?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // El usuario eligió "No", no se realiza ninguna acción
          },
        },
        {
          text: 'Sí',
          handler: () => {
            // El usuario eligió "Sí", aquí puedes enviar el formulario
            this.submitForm(); // Llama a tu función submitForm
          },
        },
      ],
    });

    await alert.present();
  }

  async submitForm() {
    console.log('Enviando el formulario');
    this.formData.comuna = Number(this.formData.comuna);
    console.log(this.formData);
    try {
      const response = await (
        await this.apiService.postData(this.formData)
      ).subscribe();

      console.log('Respuesta exitosa:', response);
      this.presentarModal('Exito al crear cliente', true);
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      this.presentarModal('Error al crear cliente', false)
    }
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
