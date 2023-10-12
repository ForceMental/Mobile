import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { format } from 'date-fns';

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
  formatDate(date: Date): string {
    return format(date, 'dd/MM/yyyy');
  }
  
  visitasAgendadas: VisitaAgendada[] = [
    { fecha: new Date('2023-10-30T10:00:00'), cliente: 'Juan Pérez', direccion: 'los boldos 18, Viña del Mar' },
    { fecha: new Date('2023-10-01T12:00:00'), cliente: 'María González', direccion: 'Las azucenas, Quilpue' },
    { fecha: new Date('2023-10-01T14:00:00'), cliente: 'Carlos Valverde', direccion: 'Las palmas, Viña del Mar' },
    { fecha: new Date('2023-10-01T17:00:00'), cliente: 'Esteban Paredes', direccion: 'Los monos, Viña del Mar' },
  ];

  selectedDate: string | null = null;
  filteredVisitas: VisitaAgendada[] = [];
  visitaSeleccionada: VisitaAgendada | null = null;
  mostrarLista: boolean = false; // Inicialmente, ocultamos la lista

  constructor(private alertController: AlertController) {}

  onDateSelected(event: any) {
    const selectedDate = event.detail.value;
    if (selectedDate) {
      const selectedDateParts = selectedDate.split('T');
      const selectedDateString = selectedDateParts.length > 0 ? selectedDateParts[0] : '';
  
      this.filteredVisitas = this.visitasAgendadas.filter(visita => {
        const visitaDateString = visita.fecha.toISOString().split('T')[0];
        return selectedDateString === visitaDateString;
      });
  
      // Mostrar la lista cuando se selecciona una fecha
      this.mostrarLista = true;
    } else {
      this.filteredVisitas = [];
      this.mostrarLista = false; // Ocultar la lista si no hay fecha seleccionada
    }
  }

  setVisitaSeleccionada(visita: VisitaAgendada) {
    this.visitaSeleccionada = visita;
  }

  mostrarNombresClientes() {
    // Aquí mostramos la lista de clientes
    this.mostrarLista = true;
  }   
}
