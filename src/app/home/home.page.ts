import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController, private router: Router) { }

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


