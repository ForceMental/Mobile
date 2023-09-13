import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitaFrioPageRoutingModule } from './visita-frio-routing.module';

import { VisitaFrioPage } from './visita-frio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitaFrioPageRoutingModule
  ],
  declarations: [VisitaFrioPage]
})
export class VisitaFrioPageModule {}
