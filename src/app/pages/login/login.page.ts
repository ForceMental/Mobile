import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService, private router: Router)
    {

    }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithAzure()
      .then(result => {
        
        console.log(result);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        
      });
  }
  // async onLoginClick() {
  //   try {
  //     const token = await this.authService.login();
  //     console.log("Token obtenido: ", token);

  //   } catch (error) {
  //     console.error("Error durante el inicio de sesión: ", error);

  //   }
  // }


}
