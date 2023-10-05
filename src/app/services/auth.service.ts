import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Browser } from '@capacitor/browser';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private clientId = '10c0a520-d47e-45bb-a7ab-fb2bbf129cf3';
  private redirectUri = 'http://localhost:4200/home';
  private authUrl = 'https://login.microsoftonline.com/42d9664f-6210-436c-a21e-5fef2f89b719/oauth2/v2.0/authorize';
  private tokenUrl = 'https://login.microsoftonline.com/42d9664f-6210-436c-a21e-5fef2f89b719/oauth2/v2.0/token';

  constructor(private http: HttpClient) {
  }

  async login() {
    const codeVerifier = this.generateCodeVerifier();
    const codeChallenge = await this.generateCodeChallenge(codeVerifier);

    const authRequestUrl = `${this.authUrl}?client_id=${this.clientId}&response_type=code&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=api://10c0a520-d47e-45bb-a7ab-fb2bbf129cf3/product`;

    Browser.open({ url: authRequestUrl });

    const data = await this.waitForAppUrlOpen();

    const authCode = this.extractAuthCode(data.url);
    if (authCode === null) {
      throw new Error("No se pudo extraer el código de autorización");
    }
    const token = await this.getToken(authCode, codeVerifier);
    return token;
}

private waitForAppUrlOpen(): Promise<any> {
  return new Promise((resolve) => {
      const handler = App.addListener('appUrlOpen', (data) => {
          handler.remove();
          resolve(data);
      });
  });
}

async getToken(authCode: string, codeVerifier: string) {
    const body = {
        client_id: this.clientId,
        grant_type: 'authorization_code',
        code: authCode,
        redirect_uri: this.redirectUri,
        code_verifier: codeVerifier
    };

    return this.http.post(this.tokenUrl, body).toPromise();
}

private extractAuthCode(url: string): string | null {
    const regex = /code=([^&]*)/;
    const match = regex.exec(url);
    if (match && match.length > 1) {
        return match[1];
    }
    return null;
}

private generateCodeVerifier() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    const charactersLength = characters.length;
    for (let i = 0; i < 128; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

private async generateCodeChallenge(verifier: string) {
    const hashed = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
    let result = '';
    const view = new DataView(hashed);
    for (let i = 0; i < hashed.byteLength; i += 4) {
        result += ('00000000' + view.getUint32(i).toString(16)).slice(-8);
    }
    return btoa(result).replace('+', '-').replace('/', '_').replace(/=+$/, '');
}



}
