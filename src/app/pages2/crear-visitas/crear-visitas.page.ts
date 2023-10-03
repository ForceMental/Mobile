import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-visitas',
  templateUrl: './crear-visitas.page.html',
  styleUrls: ['./crear-visitas.page.scss'],
})
export class CrearVisitasPage implements OnInit {
  esVisitaEnFrio: boolean = false; // Variable para controlar si es una visita en frío

  constructor() { }

  ngOnInit() {
  }

}

