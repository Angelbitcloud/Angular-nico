import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LadingPageComponent } from './lading-page/lading-page.component';
import { BasicoComponent } from './modulos-apredizaje/basico/basico.component';
import { IntermedioComponent } from './modulos-apredizaje/intermedio/intermedio.component';
import { AvanzadoComponent } from './modulos-apredizaje/avanzado/avanzado.component';
import { HomeRoutingModule } from './home-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { KeysComponent } from './modulos-apredizaje/keys/keys.component';
import { TiposDatosComponent } from './modulos-apredizaje/tipos-datos/tipos-datos.component';
import { FuncionesTablasComponent } from './modulos-apredizaje/funciones-tablas/funciones-tablas.component';
import { AlterTablasComponent } from './modulos-apredizaje/alter-tablas/alter-tablas.component';
import { JoinsComponent } from './modulos-apredizaje/joins/joins.component';
import { SubconsultasComponent } from './modulos-apredizaje/subconsultas/subconsultas.component';



@NgModule({
  declarations: [
    LadingPageComponent,
    BasicoComponent,
    IntermedioComponent,
    AvanzadoComponent,
    KeysComponent,
    TiposDatosComponent,
    FuncionesTablasComponent,
    AlterTablasComponent,
    JoinsComponent,
    SubconsultasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule
  ]
})
export class HomeModule { }
