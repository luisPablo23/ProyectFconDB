import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './services/servicios/servicios.component';
import { SolicitudComponent } from './services/solicitud/solicitud.component';



const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirección de la raíz a /inicio
  { path: 'inicio', component: InicioComponent },        // Página principal
  { path: 'acercade', component: AcercadeComponent },    // Página "Sobre Nosotros"
  { path: 'contact', component: ContactComponent },      // Página "Contacto"
  { path: 'servicios', component: ServiciosComponent },  // Pagina "Servicios"
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'graficos', loadComponent: () => import('./pages/graficos/graficos.component').then(m => m.GraficosComponent) },
  { path: '**', redirectTo: 'graficos' },                // Ruta por defecto opcional
  { path: '**', redirectTo: 'inicio' }                   // Redirección para rutas no válidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
