import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearClientesPage } from './crear-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: CrearClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearClientesPageRoutingModule {}
