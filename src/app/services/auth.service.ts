import { Injectable } from '@angular/core';
import { OAuth2Client } from '@byteowls/capacitor-oauth2';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  private generateCodeVerifier(): string {
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

  async loginWithAzure(): Promise<any> {
    const codeVerifier = this.generateCodeVerifier();
    const codeChallenge = await this.generateCodeChallenge(codeVerifier);

    const oauth2Options = {
      appId: "10c0a520-d47e-45bb-a7ab-fb2bbf129cf3",
      authorizationBaseUrl: "https://login.microsoftonline.com/42d9664f-6210-436c-a21e-5fef2f89b719/oauth2/v2.0/authorize",
      accessTokenEndpoint: "https://login.microsoftonline.com/42d9664f-6210-436c-a21e-5fef2f89b719/oauth2/v2.0/token",
      responseType: "code",
      scope: "api://10c0a520-d47e-45bb-a7ab-fb2bbf129cf3/product",
      pkceEnabled: true,
      pkceCodeChallenge: codeChallenge,
      redirectUrl: 'http://localhost:4200/home',
      web: {
        redirectUrl: "http://localhost:4200/home",
        windowOptions: "height=600,left=0,top=0",
        pkceEnabled: true,
        pkceCodeChallenge: codeChallenge,
      }
    };

    return OAuth2Client.authenticate(oauth2Options);
  }


}

