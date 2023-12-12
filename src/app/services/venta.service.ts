import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, from, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private apiUrl = 'http://107.22.174.168:8010/api/ventas/';
  private authToken: string = '';
  constructor(private http: HttpClient, private authService: AuthService) {}

  realizarVenta(venta: any): Observable<any> {
    return from(this.authService.getAuthToken()).pipe(
      mergeMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        });

        return this.http.post(`${this.apiUrl}`, venta, { headers });
      })
    );
  }
}

