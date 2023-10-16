import { Injectable } from '@angular/core';
import { OAuth2Client } from '@byteowls/capacitor-oauth2';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage, private http: HttpClient) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
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
      redirectUrl: 'http://localhost:8100/home',
      web: {
        redirectUrl: "http://localhost:8100/home",
        windowOptions: "height=600,left=0,top=0",
        pkceEnabled: true,
        pkceCodeChallenge: codeChallenge,
      }
    };

    const authResponse = await OAuth2Client.authenticate(oauth2Options);

    const accessToken = authResponse.access_token;
    const refreshToken = authResponse.refresh_token;

    if (accessToken) {
      // Almacena el token en segundo plano sin bloquear el flujo principal
      Promise.resolve().then(async () => {
        await this.storeAccessToken(accessToken);
      });
    }
    if (accessToken) {
      // Define las cabeceras de autorización con el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
      });

      // Realiza la solicitud HTTP con el token de acceso en el encabezado
      try {
        const userInfo = await firstValueFrom(this.http.get(`${environment.apiUrl}/api/view_users/`, { headers }));
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        console.log('Información del usuario:', userInfo);
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    }
    console.log(accessToken);
    return authResponse
  }

  async storeAccessToken(accessToken: string): Promise<void> {
    await this.storage.set('access_token', accessToken);
  }

  getAuthToken() {
    return this.storage.get('access_token');
  }
}

