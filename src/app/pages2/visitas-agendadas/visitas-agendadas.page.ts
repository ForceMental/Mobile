import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface VisitaAgendada {
  fecha: Date;
  cliente: string;
  direccion: string;
}

@Component({
  selector: 'app-visitas-agendadas',
  templateUrl: './visitas-agendadas.page.html',
  styleUrls: ['./visitas-agendadas.page.scss'],
})
export class VisitasAgendadasPage {
  visitasAgendadas: VisitaAgendada[] = [
    { fecha: new Date('2023-10-30T10:00:00'), cliente: 'Juan Pérez', direccion: 'los boldos 18, Viña del Mar' },
    { fecha: new Date('2023-10-01T12:00:00'), cliente: 'María González', direccion: 'Las azucenas, Quilpue' },
    { fecha: new Date('2023-10-01T14:00:00'), cliente: 'Carlos Valverde', direccion: 'Las palmas, Viña del Mar' },
    { fecha: new Date('2023-10-01T17:00:00'), cliente: 'Esteban Paredes', direccion: 'Los monos, Viña del Mar' },

    
  ];

  constructor(private alertController: AlertController) {}

  async mostrarDetalles(visita: VisitaAgendada) {
    const mensaje = `Fecha: ${visita.fecha.toLocaleDateString()}
                    Hora: ${visita.fecha.toLocaleTimeString()}
                    Dirección: ${visita.direccion}`;
  
    const alert = await this.alertController.create({
      header: 'Datos Cliente',
      message: mensaje,
      cssClass: 'multiline-alert',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  
  
}
