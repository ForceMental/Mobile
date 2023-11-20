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
          .set('id_empleado', 100)
          .set('fecha', date);

        return this.http.get(`https://forcemental.azure-api.net/visita/api/visitasIdFecha/`, { headers, params });
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
        const url = `https://forcemental.azure-api.net/visita/api/visitas/`;

        // Realizar la solicitud HTTP con los encabezados
        return this.http.post(url, formularioCompleto, { headers });
      })
    );
  }

  reprogramarVisita(visitaId: number, nuevaFecha: string) {
    const url = `https://forcemental.azure-api.net/visita/api/reprogramar/${visitaId}/`;
    return this.http.patch(url, { fecha_visita: nuevaFecha });
  }

  finalizarVisita(visitaId: number) {
    const url = `https://forcemental.azure-api.net/visita/api/visita/${visitaId}/finalizar/`;
    return this.http.post(url, {});
  }

  cancelarVisita(visitaId: number) {
    const url = `https://forcemental.azure-api.net/visita/api/visita/${visitaId}/cancelar/`;
    return this.http.post(url, {});
  }
}
