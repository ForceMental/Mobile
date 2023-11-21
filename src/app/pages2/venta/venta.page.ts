import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage {
  formData: any = {}; // Tu modelo de datos

  constructor(private alertController: AlertController) {}

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
          }
        },
        {
          text: 'Sí',
          handler: () => {
            // El usuario eligió "Sí", aquí puedes enviar el formulario
            this.submitForm(); // Llama a tu función submitForm
          }
        }
      ]
    });

    await alert.present();
  }

  submitForm() {
    // Aquí puedes acceder a los datos del formulario usando this.formData y enviarlos a través de una solicitud HTTP o realizar cualquier otro procesamiento necesario.
    console.log('Formulario enviado:', this.formData);

    // Ejemplo de cómo podrías enviar los datos a través de una solicitud HTTP usando Angular HttpClient:
    // this.httpClient.post('URL_de_tu_api', this.formData).subscribe(
    //   (response) => {
    //     console.log('Respuesta del servidor:', response);
    //     // Puedes realizar acciones adicionales después de enviar el formulario y recibir una respuesta exitosa.
    //   },
    //   (error) => {
    //     console.error('Error al enviar el formulario:', error);
    //     // Manejo de errores en caso de que la solicitud falle.
    //   }
    // );
  }
}
