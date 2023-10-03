import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearVisitasPageRoutingModule } from './crear-visitas-routing.module';

import { CrearVisitasPage } from './crear-visitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearVisitasPageRoutingModule
  ],
  declarations: [CrearVisitasPage]
})
export class CrearVisitasPageModule {}
