import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, mergeMap, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  idEmpleado: number = 0;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getVisitasByDate(date: string): Observable<any> {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      this.idEmpleado = userInfo['user-id'];
    }
    console.log(this.idEmpleado);
    return from(this.authService.getAuthToken()).pipe(
      mergeMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        console.log(token);
        const params = new HttpParams()
          .set('id_empleado', this.idEmpleado)
          .set('fecha', date);

        return this.http.get(`http://107.22.174.168:8010/api/visitasIdFecha/`, { headers, params });
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
        const url = `http://107.22.174.168:8010/api/visitas-crear/`;

        // Realizar la solicitud HTTP con los encabezados
        return this.http.post(url, formularioCompleto, { headers });
      })
    );
  }
  reprogramarVisita(visitaId: number, nuevaFecha: string) {
    return from(this.authService.getAuthToken()).pipe(
      switchMap(token => {
        const url = `http://107.22.174.168:8010/api/reprogramar-visita/${visitaId}/`;

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        });

        return this.http.patch(url, { fecha_visita: nuevaFecha }, { headers });
      })
    );
  }

  finalizarVisita(visitaId: number): Observable<any> {
    return from(this.authService.getAuthToken()).pipe(
      switchMap(token => {
        const url = `http://107.22.174.168:8010/api/finalizar/${visitaId}/`;
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        });
        return this.http.post(url, {}, { headers });
      })
    );
  }

  cancelarVisita(visitaId: number): Observable<any> {
    return from(this.authService.getAuthToken()).pipe(
      switchMap(token => {
        const url = `http://107.22.174.168:8010/api/cancelar/${visitaId}/`;
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        });
        return this.http.post(url, {}, { headers });
      })
    );
  }
}
