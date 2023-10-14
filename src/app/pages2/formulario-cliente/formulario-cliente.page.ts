import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.page.html',
  styleUrls: ['./formulario-cliente.page.scss'],
})
export class FormularioClientePage implements OnInit {
  formData: any = {
    nombre: '',
    apellido: '',
    telefono: '',
    correo_electronico: '',
    direccion: '',
    rut: '',
    comuna: 1,
  };
  token: string = '';
  constructor(private apiService: ClientService) { }

  ngOnInit() {
  }

  async submitForm() {
    console.log("Enviando el formulario");
    this.formData.comuna = Number(this.formData.comuna);
    console.log(this.formData);
    try {
      const response = await (await this.apiService.postData(this.formData)).subscribe();
      // Maneja la respuesta exitosa aquí
      console.log('Respuesta exitosa:', response);
      // Puedes realizar otras acciones con la respuesta, como actualizar la vista
    } catch (error) {
      // Maneja los errores aquí
      console.error('Error en la solicitud POST:', error);
      // Puedes mostrar un mensaje de error al usuario u otras acciones de manejo de errores
    }
  }

}


