import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Simula una carga lenta de 2 segundos antes de redirigir a la página de inicio de sesión
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);  // 2000 milisegundos (2 segundos)
  }
}

