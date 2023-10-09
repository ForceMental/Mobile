import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioClientePageRoutingModule } from './formulario-cliente-routing.module';

import { FormularioClientePage } from './formulario-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioClientePageRoutingModule
  ],
  declarations: [FormularioClientePage]
})
export class FormularioClientePageModule {}
