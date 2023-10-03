import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitasFrioPage } from './visitas-frio.page';

const routes: Routes = [
  {
    path: '',
    component: VisitasFrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitasFrioPageRoutingModule {}
