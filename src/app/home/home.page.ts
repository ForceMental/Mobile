import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userInfo: any;
  constructor(private alertController: AlertController, private router: Router) {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      this.userInfo = JSON.parse(userInfoString);
    }
  }



  async presentAlert() {
    const alert = await this.alertController.create({

      message: '¿Estás seguro que quieres cerrar la aplicación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Salir',
          handler: () => {
            // Navegar a otra página al salir
            this.router.navigate(['/landing']);
          },
        },
      ],
    });

    await alert.present();
  }
}


