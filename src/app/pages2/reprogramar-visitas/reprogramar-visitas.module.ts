import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReprogramarVisitasPageRoutingModule } from './reprogramar-visitas-routing.module';

import { ReprogramarVisitasPage } from './reprogramar-visitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReprogramarVisitasPageRoutingModule
  ],
  declarations: [ReprogramarVisitasPage]
})
export class ReprogramarVisitasPageModule {}
