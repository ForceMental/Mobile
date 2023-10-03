import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReprogramarVisitasPage } from './reprogramar-visitas.page';

const routes: Routes = [
  {
    path: '',
    component: ReprogramarVisitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReprogramarVisitasPageRoutingModule {}
