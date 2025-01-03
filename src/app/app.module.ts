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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercadeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ServiciosComponent,
    SolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
