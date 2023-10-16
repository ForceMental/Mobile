import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [ //rutas para las pages
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  
  {
    path: 'crear-visitas',
    loadChildren: () => import('./pages2/crear-visitas/crear-visitas.module').then( m => m.CrearVisitasPageModule)
  },
  {
    path: 'visitas-agendadas',
    loadChildren: () => import('./pages2/visitas-agendadas/visitas-agendadas.module').then( m => m.VisitasAgendadasPageModule)
  },
  
  {
    path: 'reprogramar-visitas',
    loadChildren: () => import('./pages2/reprogramar-visitas/reprogramar-visitas.module').then( m => m.ReprogramarVisitasPageModule)
  },
  {
    path: 'visitas-frio',
    loadChildren: () => import('./pages2/visitas-frio/visitas-frio.module').then( m => m.VisitasFrioPageModule)
  },
  {
    path: 'solicitar-productos',
    loadChildren: () => import('./pages2/solicitar-productos/solicitar-productos.module').then( m => m.SolicitarProductosPageModule)
  },
  {
    path: 'crear-clientes',
    loadChildren: () => import('./pages2/crear-clientes/crear-clientes.module').then( m => m.CrearClientesPageModule)
  },
  {
    path: 'formulario-cliente',
    loadChildren: () => import('./pages2/formulario-cliente/formulario-cliente.module').then( m => m.FormularioClientePageModule)
  },
  {
    path: 'venta',
    loadChildren: () => import('./pages2/venta/venta.module').then( m => m.VentaPageModule)
  },
  {
    path: 'descripcion-productos',
    loadChildren: () => import('./pages2/descripcion-productos/descripcion-productos.module').then( m => m.DescripcionProductosPageModule)
  },

   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
