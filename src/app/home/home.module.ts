import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LadingPageComponent } from './lading-page/lading-page.component';
import { CrearTablaComponent } from './modulos-apredizaje/crear-tabla/crear-tabla';
import { CrearRegistrosComponent } from './modulos-apredizaje/crear-registros/crear-registros';
import { CrearDbComponent } from './modulos-apredizaje/crear-db/crear-db';
import { HomeRoutingModule } from './home-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { KeysComponent } from './modulos-apredizaje/keys/keys.component';
import { TiposDatosComponent } from './modulos-apredizaje/tipos-datos/tipos-datos.component';
import { FuncionesTablasComponent } from './modulos-apredizaje/funciones-tablas/funciones-tablas.component';
import { AlterTablasComponent } from './modulos-apredizaje/alter-tablas/alter-tablas.component';
import { JoinsComponent } from './modulos-apredizaje/joins/joins.component';
import { SubconsultasComponent } from './modulos-apredizaje/subconsultas/subconsultas.component';
import { SharedModule } from '../shared/shared.module';
import { PruebasComponent } from './modulos-apredizaje/pruebas/pruebas.component';





@NgModule({
  declarations: [
    LadingPageComponent,
    CrearTablaComponent,
    CrearRegistrosComponent,
    CrearDbComponent,
    KeysComponent,
    TiposDatosComponent,
    FuncionesTablasComponent,
    AlterTablasComponent,
    JoinsComponent,
    SubconsultasComponent,
    PruebasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule,
    DragDropModule,
    SharedModule
  ]
})
export class HomeModule { }
