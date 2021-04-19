import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { SeguroViajeComponent } from './components/seguro-viaje/seguro-viaje.component';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { FiltrarPipe } from './pipes/filtrar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlojamientosComponent,
    VuelosComponent,
    PaquetesComponent,
    ActividadesComponent,
    SeguroViajeComponent,
    OrdenarPipe,
    FiltrarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
