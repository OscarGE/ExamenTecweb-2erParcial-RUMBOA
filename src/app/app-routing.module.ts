import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { SeguroViajeComponent } from './components/seguro-viaje/seguro-viaje.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home-component'},
  {path:'home-component', component: HomeComponent},
  {path:'alojamientos-component', component: AlojamientosComponent},
  {path:'vuelos-component', component: VuelosComponent},
  {path:'paquetes-component', component: PaquetesComponent},
  {path:'actividades-component', component: ActividadesComponent},
  {path:'seguro-viaje-component', component: SeguroViajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
