import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitaFrioPage } from './visita-frio.page';

const routes: Routes = [
  {
    path: '',
    component: VisitaFrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitaFrioPageRoutingModule {}
