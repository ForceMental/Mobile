import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationEnd} from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userInfo: any;
  mobileQuery: MediaQueryList;
  isHomePage: boolean;
  constructor(private alertController: AlertController, private router: Router, private media: MediaMatcher,) {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      this.userInfo = JSON.parse(userInfoString);
    }
    this.mobileQuery = media.matchMedia('(prefers-color-scheme: dark)');
    this.isHomePage = this.router.url === '/home';

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/home';
      }
    });
  }

  private toggleDarkTheme(shouldAdd: boolean) {
    const body = document.body;
    if (shouldAdd) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
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


