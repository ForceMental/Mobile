import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearClientesPageRoutingModule } from './crear-clientes-routing.module';

import { CrearClientesPage } from './crear-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearClientesPageRoutingModule
  ],
  declarations: [CrearClientesPage]
})
export class CrearClientesPageModule {}
