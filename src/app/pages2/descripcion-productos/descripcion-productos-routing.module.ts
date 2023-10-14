import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionProductosPage } from './descripcion-productos.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionProductosPageRoutingModule {}
