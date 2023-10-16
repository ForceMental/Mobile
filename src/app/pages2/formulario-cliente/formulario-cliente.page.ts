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

      console.log('Respuesta exitosa:', response);

    } catch (error) {

      console.error('Error en la solicitud POST:', error);

    }
  }

}

