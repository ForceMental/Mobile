import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitaAgendadaPage } from './visita-agendada.page';

const routes: Routes = [
  {
    path: '',
    component: VisitaAgendadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitaAgendadaPageRoutingModule {}
