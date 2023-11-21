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


  constructor(private http: HttpClient, private storage: Storage, private authService: AuthService) {

  }

  getWithToken(): Observable<any> {
    return from(this.authService.getAuthToken()).pipe(
      mergeMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
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
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(`${environment.apiUrl}/api/ingreso_clientes/`, data, { headers });
  }
}
