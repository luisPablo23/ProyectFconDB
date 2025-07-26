import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importación de componentes principales
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './services/servicios/servicios.component';
import { SolicitudComponent } from './services/solicitud/solicitud.component';

// Importación de componentes de Mantenimiento
import { MantenimientoComputadorasComponent } from './pages/mantenimiento/mantenimiento-computadoras/mantenimiento-computadoras.component';
import { MantenimientoPreventivoComponent } from './pages/mantenimiento/mantenimiento-preventivo/mantenimiento-preventivo.component';
import { MantenimientoCorrectivoComponent } from './pages/mantenimiento/mantenimiento-correctivo/mantenimiento-correctivo.component';
import { MantenimientoPredictivoComponent } from './pages/mantenimiento/mantenimiento-predictivo/mantenimiento-predictivo.component';
import { MantenimientoSoftwareComponent } from './pages/mantenimiento/mantenimiento-software/mantenimiento-software.component';

// Importación de componentes de Historia de la Computadora
import { HistoriaComputadoraComponent } from './pages/historia/historia-computadora/historia-computadora.component';
import { HistoriaOrigenesComponent } from './pages/historia/historia-origenes/historia-origenes.component';
import { GeneracionesComputadorasComponent } from './pages/historia/generaciones-computadoras/generaciones-computadoras.component';
import { ComponentesComputadoraComponent } from './pages/historia/componentes-computadora/componentes-computadora.component';
import { HistoriaSoftwareComponent } from './pages/historia/historia-software/historia-software.component';

// Importación de los nuevos componentes de Historia del Software
import { IntroduccionComponent } from './historia-software/introduccion/introduccion.component';
import { PrimerosLenguajesComponent } from './historia-software/primeros-lenguajes/primeros-lenguajes.component';
import { SistemasOperativosTempranosComponent } from './historia-software/sistemas-operativos-tempranos/sistemas-operativos-tempranos.component';
import { EvolucionLenguajesComponent } from './historia-software/evolucion-lenguajes/evolucion-lenguajes.component';
import { ComputacionPersonalComponent } from './historia-software/computacion-personal/computacion-personal.component';
import { SistemasOperativosModernosComponent } from './historia-software/sistemas-operativos-modernos/sistemas-operativos-modernos.component';
import { FuturoSoftwareComponent } from './historia-software/futuro-software/futuro-software.component';

// Rutas de la Aplicación
const routes: Routes = [
  // Redirección de la raíz a /inicio
  { path: '', redirectTo: '/ProyectFconDB/inicio', pathMatch: 'full' },

  // Páginas principales
  { path: 'inicio', component: InicioComponent },        // Página principal
  { path: 'acercade', component: AcercadeComponent },    // Página "Sobre Nosotros"
  { path: 'contact', component: ContactComponent },      // Página "Contacto"
  { path: 'servicios', component: ServiciosComponent },  // Página "Servicios"
  { path: 'solicitud', component: SolicitudComponent },  // Página "Solicitud"
  
  // Rutas para Mantenimiento
  { path: 'mantenimiento', component: MantenimientoComputadorasComponent }, // Página principal mantenimiento
  { path: 'mantenimiento-preventivo', component: MantenimientoPreventivoComponent }, // Página mantenimiento preventivo
  { path: 'mantenimiento-correctivo', component: MantenimientoCorrectivoComponent }, // Página mantenimiento correctivo
  { path: 'mantenimiento-predictivo', component: MantenimientoPredictivoComponent }, // Página mantenimiento predictivo
  { path: 'mantenimiento-software', component: MantenimientoSoftwareComponent }, // Página mantenimiento software

  // Rutas para Historia de la Computadora
  { path: 'historia-computadora', component: HistoriaComputadoraComponent }, // Página principal historia
  { path: 'historia-origenes', component: HistoriaOrigenesComponent }, // Página historia orígenes
  { path: 'generaciones-computadoras', component: GeneracionesComputadorasComponent }, // Generaciones
  { path: 'componentes-computadora', component: ComponentesComputadoraComponent }, // Componentes
  { path: 'historia-software', component: HistoriaSoftwareComponent }, // Historia del software

  // Rutas para Historia del Software
  { path: 'introduccion-software', component: IntroduccionComponent }, // Introducción al Software
  { path: 'primeros-lenguajes', component: PrimerosLenguajesComponent }, // Primeros Lenguajes de Programación
  { path: 'sistemas-operativos-tempranos', component: SistemasOperativosTempranosComponent }, // Sistemas Operativos Tempranos
  { path: 'evolucion-lenguajes', component: EvolucionLenguajesComponent }, // Evolución de los Lenguajes de Programación
  { path: 'computacion-personal', component: ComputacionPersonalComponent }, // Computación Personal
  { path: 'sistemas-operativos-modernos', component: SistemasOperativosModernosComponent }, // Sistemas Operativos Modernos
  { path: 'futuro-software', component: FuturoSoftwareComponent }, // El Futuro del Software
  
  // Cargar dinámicamente la página de gráficos
  { path: 'graficos', loadComponent: () => import('./pages/graficos/graficos.component').then(m => m.GraficosComponent) },

  // Redirección para rutas no válidas
  { path: '**', redirectTo: '/ProyectFconDB/inicio' } // Redirigir a la página de inicio si la ruta es incorrecta
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }