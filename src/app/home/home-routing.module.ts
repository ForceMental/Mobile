import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'visita-agendada',
    loadChildren: () => import('./visita-agendada/visita-agendada.module').then( m => m.VisitaAgendadaPageModule)
  },
  {
    path: 'crear-visita',
    loadChildren: () => import('./crear-visita/crear-visita.module').then( m => m.CrearVisitaPageModule)
  },
  
  {
    path: 'reprogramar-visita',
    loadChildren: () => import('./reprogramar-visita/reprogramar-visita.module').then( m => m.ReprogramarVisitaPageModule)
  },
  {
    path: 'visita-frio',
    loadChildren: () => import('./visita-frio/visita-frio.module').then( m => m.VisitaFrioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
