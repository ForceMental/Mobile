import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private apiUrl = 'https://forcemental.azure-api.net/venta/api/ventas/';

  constructor(private http: HttpClient) {}

  realizarVenta(venta: any) {
    console.log(venta);
    return this.http.post(this.apiUrl, venta);
  }
}
