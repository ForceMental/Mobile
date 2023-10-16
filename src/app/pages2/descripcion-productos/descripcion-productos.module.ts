import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionProductosPageRoutingModule } from './descripcion-productos-routing.module';

import { DescripcionProductosPage } from './descripcion-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionProductosPageRoutingModule
  ],
  declarations: [DescripcionProductosPage]
})
export class DescripcionProductosPageModule {}
