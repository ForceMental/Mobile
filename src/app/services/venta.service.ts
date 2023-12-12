import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, from, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private apiUrl = 'https://gatewayforce.azure-api.net/api/ventas/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  realizarVenta(venta: any): Observable<any> {
    return from(this.authService.getAuthToken()).pipe(
      mergeMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        });
        console.log(venta);
        return this.http.post(`${this.apiUrl}`, venta, { headers });
      })
    );
  }
}

