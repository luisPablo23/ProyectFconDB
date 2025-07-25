import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './services/servicios/servicios.component';
import { SolicitudComponent } from './services/solicitud/solicitud.component';
import { MantenimientoComputadorasComponent } from './pages/mantenimiento/mantenimiento-computadoras/mantenimiento-computadoras.component';
import { MantenimientoPreventivoComponent } from './pages/mantenimiento/mantenimiento-preventivo/mantenimiento-preventivo.component';
import { MantenimientoCorrectivoComponent } from './pages/mantenimiento/mantenimiento-correctivo/mantenimiento-correctivo.component';
import { MantenimientoPredictivoComponent } from './pages/mantenimiento/mantenimiento-predictivo/mantenimiento-predictivo.component';
import { HistoriaComputadoraComponent } from './pages/historia/historia-computadora/historia-computadora.component';
import { HistoriaOrigenesComponent } from './pages/historia/historia-origenes/historia-origenes.component';
import { GeneracionesComputadorasComponent } from './pages/historia/generaciones-computadoras/generaciones-computadoras.component';
import { ComponentesComputadoraComponent } from './pages/historia/componentes-computadora/componentes-computadora.component';
import { HistoriaSoftwareComponent } from './pages/historia/historia-software/historia-software.component';
import { MantenimientoSoftwareComponent } from './pages/mantenimiento/mantenimiento-software/mantenimiento-software.component';
import { LenguajesDeProgramacionComponent } from './pages/lenguajes-de-programacion/lenguajes-de-programacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercadeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ServiciosComponent,
    SolicitudComponent,
    MantenimientoComputadorasComponent,
    MantenimientoPreventivoComponent,
    MantenimientoCorrectivoComponent,
    MantenimientoPredictivoComponent,
    HistoriaComputadoraComponent,
    HistoriaOrigenesComponent,
    GeneracionesComputadorasComponent,
    ComponentesComputadoraComponent,
    HistoriaSoftwareComponent,
    MantenimientoSoftwareComponent,
    LenguajesDeProgramacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
