import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitaAgendadaPageRoutingModule } from './visita-agendada-routing.module';

import { VisitaAgendadaPage } from './visita-agendada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitaAgendadaPageRoutingModule
  ],
  declarations: [VisitaAgendadaPage]
})
export class VisitaAgendadaPageModule {}
