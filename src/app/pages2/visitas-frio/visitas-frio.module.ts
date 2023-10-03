import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitasFrioPageRoutingModule } from './visitas-frio-routing.module';

import { VisitasFrioPage } from './visitas-frio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitasFrioPageRoutingModule
  ],
  declarations: [VisitasFrioPage]
})
export class VisitasFrioPageModule {}
