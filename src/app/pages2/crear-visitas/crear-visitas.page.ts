import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-visitas',
  templateUrl: './crear-visitas.page.html',
  styleUrls: ['./crear-visitas.page.scss'],
})
export class CrearVisitasPage {
  esVisitaEnFrio: boolean = false; // Variable para controlar si es una visita en frío

  cambiarColorBoton() {
    // La función cambia la variable esVisitaEnFrio que controla el color del botón
    // Esta función se llama cuando se cambia el estado del checkbox
    // Dependiendo del valor, el botón tendrá un color diferente
  }
}




