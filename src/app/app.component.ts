import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home-outline'
    },
    {
      title: 'Landing',
      url: '/landing',
      icon: 'log-in-outline'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in-outline'
    },
    {
      title: 'Reset-password',
      url: '/reset-password',
      icon: 'log-in-outline'
    },
    {
      title: 'Signup',
      url: '/signup',
      icon: 'log-in-outline'
    },
    {
      title: 'Visitas Agendadas',
      url: '/visitas-agendadas',
      icon: 'calendar-outline'
    }
  ];

  mobileQuery: MediaQueryList;
  isHomePage: boolean;

  constructor(private media: MediaMatcher, private router: Router, private menuController: MenuController) {
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

  closeMenu() {
    this.menuController.close();
  }
}
