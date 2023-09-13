import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
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
  ];

  mobileQuery: MediaQueryList;

  constructor(private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(prefers-color-scheme: dark)');
  }

  ngOnInit() {
    this.toggleDarkTheme(this.mobileQuery.matches);

    this.mobileQuery.addEventListener('change', (mediaQuery) => {
      this.toggleDarkTheme(mediaQuery.matches);
    });
  }

  toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}





