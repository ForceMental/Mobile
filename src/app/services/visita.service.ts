import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, mergeMap, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {



  constructor(private http: HttpClient, private authService: AuthService) {}

  getVisitasByDate(date: string): Observable<any> {
    return from(this.authService.getAuthToken()).pipe(
      mergeMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });

        return this.http.get(`${environment.apiUrl}/api/visitas/${date}`, { headers });
      })
    );
  }

  crearVisita(formularioCompleto: any): Observable<any> {
    return from(this.authService.getAuthToken()).pipe(
      switchMap(token => {
        // Construir los encabezados con el token
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        });

        // URL para la solicitud POST
        const url = `${environment.apiUrl}/api/visitas-crear/`;

        // Realizar la solicitud HTTP con los encabezados
        return this.http.post(url, formularioCompleto, { headers });
      })
    );
  }
}
