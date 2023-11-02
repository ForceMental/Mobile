import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage implements OnInit {
  formData: any = {
    rut: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo_electronico: '',
    direccion: '',
    comuna: 1,
    nombre_producto: '',
    stock: '',
  };

  constructor() {}

  ngOnInit() {}

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

