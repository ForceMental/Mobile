import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReprogramarVisitaPage } from './reprogramar-visita.page';

const routes: Routes = [
  {
    path: '',
    component: ReprogramarVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReprogramarVisitaPageRoutingModule {}
