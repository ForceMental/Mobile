import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://127.0.0.1:8010';
  token: string = '';
  constructor(private http: HttpClient, private storage: Storage) {

  }

  // Función para realizar una solicitud GET a la API con un token de autorización
  getWithToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.get(`${this.apiUrl}/api/clientes/`, { headers });
  }
  getTokenFromStorage(): Promise<string | null> {
    return this.storage.get('access_token').catch(error => {
      console.error('Error al obtener el token desde el almacenamiento:', error);
      return null; // Retorna null u otro valor por defecto en caso de error
    });
  }
  async postData(data: any): Promise<Observable<any>> {
    const token = await this.getTokenFromStorage()
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`http://localhost:8010/api/ingreso_clientes/`, data, { headers });
  }

}
