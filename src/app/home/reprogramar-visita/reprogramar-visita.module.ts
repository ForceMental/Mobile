import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReprogramarVisitaPageRoutingModule } from './reprogramar-visita-routing.module';

import { ReprogramarVisitaPage } from './reprogramar-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReprogramarVisitaPageRoutingModule
  ],
  declarations: [ReprogramarVisitaPage]
})
export class ReprogramarVisitaPageModule {}
