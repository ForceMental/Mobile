import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, mergeMap, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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

        const params = new HttpParams()
          .set('id_empleado', 200)
          .set('fecha', date);
        console.log(`${environment.apiUrl2}/api/visitas/`, { headers, params });
        return this.http.get(`${environment.apiUrl2}/api/visitasIdFecha/`, { headers, params });
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
        const url = `${environment.apiUrl2}/api/visitas-crear/`;

        // Realizar la solicitud HTTP con los encabezados
        return this.http.post(url, formularioCompleto, { headers });
      })
    );
  }
}
