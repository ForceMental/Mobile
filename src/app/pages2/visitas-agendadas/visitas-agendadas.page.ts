import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { format } from 'date-fns';
import { VisitaService } from 'src/app/services/visita.service';



@Component({
  selector: 'app-visitas-agendadas',
  templateUrl: './visitas-agendadas.page.html',
  styleUrls: ['./visitas-agendadas.page.scss'],
})
export class VisitasAgendadasPage {
  formatDate(date: Date): string {
    return format(date, 'dd/MM/yyyy');
  }
  selectedDate: any | null = null;
  mostrarLista: boolean = false; // Inicialmente, ocultamos la lista
  dateExample = new Date().toISOString();
  visitas: any[] = [];
  acordeonAbierto: number | null = null;

  constructor(private alertController: AlertController, private modalController: ModalController,
    private visitasService: VisitaService) {

    }




  ngOnInit(): void {
    //console.log(this.dateExample);
  }
  toggleAcordeon(i: number) {
    if (this.acordeonAbierto === i) {
      this.acordeonAbierto = null; // Cierra el acordeón si se hace clic nuevamente en él
    } else {
      this.acordeonAbierto = i; // Abre el acordeón correspondiente
    }
  }


  async dismissModal() {
    await this.modalController.dismiss(); // Cierra el modal
    const partes = this.dateExample.split('T')[0].split('-');
    const fechaFormateada = `${partes[2]}-${partes[1]}-${partes[0]}`;
    console.log(fechaFormateada);
    this.visitasService.getVisitasByDate(fechaFormateada).subscribe({
      next: (data) => {
        console.log(data);
        this.visitas = data;
      },
      error: (error) => {
        console.error('Error al obtener las visitas:', error);
      },
      complete: () => {
        // Manejar la notificación de completa (opcional)
      }
    });

  }

}
