import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService)
    {

    }

  ngOnInit() {
  }
  async onLoginClick() {
    try {
      const token = await this.authService.login();
      console.log("Token obtenido: ", token);
      // Navega al siguiente componente o realiza alguna otra acción.
    } catch (error) {
      console.error("Error durante el inicio de sesión: ", error);
      // Maneja el error como consideres necesario, por ejemplo, muestra un mensaje de error al usuario.
    }
  }


}
