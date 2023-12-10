import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, mergeMap } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})


export class ClientService {

  caso: string = "eyJ0eXAiOiJKV1QiLCJub25jZSI6IklkNnVIeDIwYXZlWXhac05odjdKdnRndjJXR0dzV0E4U3RXN3haWkw0dDAiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80MmQ5NjY0Zi02MjEwLTQzNmMtYTIxZS01ZmVmMmY4OWI3MTkvIiwiaWF0IjoxNzAyMDAyMjk5LCJuYmYiOjE3MDIwMDIyOTksImV4cCI6MTcwMjAwNzQ1OCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFZUUFlLzhWQUFBQTNzUUhZQjRub3kyRFZkWDJuYyt1WVJ5amRPWGVDaVZINFIzUk04bGlvVVM3eEVYYjF1aHFOaTV5OHcvbjVVOVd5UFRuZVRnNmlPeUF5QWdESWtHbkEzbFdUMEl0aW4rQlk1N0s4OHRNQUxjZmxmR25UN0FUdnp6R0xCTTgyWFJIVC9nc2hTTGV3MVRDc1NuVEFzRmEvWU1CN1drWDVvWHJ1NFFkWjh4M3VPcz0iLCJhbHRzZWNpZCI6IjE6bGl2ZS5jb206MDAwNjdGRkVCRUJFNDE3RSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiZm9yY2VtZW50YWwiLCJhcHBpZCI6IjEwYzBhNTIwLWQ0N2UtNDViYi1hN2FiLWZiMmJiZjEyOWNmMyIsImFwcGlkYWNyIjoiMCIsImVtYWlsIjoic2hpcnl1ODVAaG90bWFpbC5jb20iLCJmYW1pbHlfbmFtZSI6InZlbGVjaWxsbyIsImdpdmVuX25hbWUiOiJzaGlyeXUiLCJpZHAiOiJsaXZlLmNvbSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI4MDA6MzAwOjY0MzE6ODk2MDpjYmE6MzJiYjo0ZTcyOjhlYTYiLCJuYW1lIjoic2hpcnl1IHZlbGVjaWxsbyIsIm9pZCI6IjZjYTVhNzA0LWUxYmQtNDU0Ny1hN2RjLWU5OWY3MWZmZWNlMCIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMkY4MEIyMTc3IiwicmgiOiIwLkFiY0FUMmJaUWhCaWJFT2lIbF92TDRtM0dRTUFBQUFBQUFBQXdBQUFBQUFBQUFESkFBWS4iLCJzY3AiOiJVc2VyLlJlYWQgcHJvZmlsZSBvcGVuaWQgZW1haWwiLCJzdWIiOiJXdjFoMFNYazRUMVBmVkVscnF4T2pQS2JiVnV3NFBESUJScXVsVDFneXlJIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IlNBIiwidGlkIjoiNDJkOTY2NGYtNjIxMC00MzZjLWEyMWUtNWZlZjJmODliNzE5IiwidW5pcXVlX25hbWUiOiJsaXZlLmNvbSNzaGlyeXU4NUBob3RtYWlsLmNvbSIsInV0aSI6IkctQkE4cnhMZ2stOTlGMmp3NmswQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoidnVFWXoyRGJjT0dRUkRhM3M1dHZtaXZNTXBJVFVZN1JwbFZoTGR1d2VFRSJ9LCJ4bXNfdGNkdCI6MTY5NTQzMTQ3OH0.Kk-0kzppxrH2BkjVo4qokhja22QEUfeerHRRhtWf46E8kmPW2HL0COvZeaxioia43-YQzyFzptt3MGuBxc9eOdzGcJY1bk2pSfzdpZu7WSBFWlSqsxD6sCZahzmI4aRvcTtggYynehqeq2wuOa2j1kAhD7qREKXEtHz_KXX--2xnjQMaDs7U9r2YKrqFuYXruRDpvMKbg0A4U2Z144K-whakz8IrGdO6Kk288Ubff6Bmc0dh-eGNauwM4LH2CWslWYghszDcgR7LD5ooUz7i8EPm7B2G3XvArIhtprPeteLAgP-uVCXiUXJn2siaH4POIRri84T9RN9T6ladb1IDpg"


  constructor(private http: HttpClient, private storage: Storage, private authService: AuthService) {

  }


  getWithToken(): Observable<any> {
    return from(this.authService.getAuthToken()).pipe(
      mergeMap((token) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json', // Asegúrate de que el servidor acepte este encabezado.
          'Authorization': `Bearer ${this.caso}`,
        });

        return this.http.get(`${environment.apiUrl}/api/clientes/`, { headers });
      })
    );
  }



  // Función para realizar una solicitud POST con el token en el encabezado
  async postData(data: any): Promise<Observable<any>> {
    const token = await this.authService.getAuthToken(); // Obtiene el token desde AuthService
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.caso}`,
    });

    return this.http.post(`${environment.apiUrl}/api/ingreso_clientes/`, data, { headers });
  }
}
