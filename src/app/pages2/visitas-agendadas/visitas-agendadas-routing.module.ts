import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitasAgendadasPage } from './visitas-agendadas.page';

const routes: Routes = [
  {
    path: '',
    component: VisitasAgendadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitasAgendadasPageRoutingModule {}
