import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LadingPageComponent } from './lading-page/lading-page.component';
import { CrearTablaComponent } from './modulos-apredizaje/crear-tabla/crear-tabla';
import { CrearRegistrosComponent } from './modulos-apredizaje/crear-registros/crear-registros';
import { CrearDbComponent } from './modulos-apredizaje/crear-db/crear-db';
import { KeysComponent } from './modulos-apredizaje/keys/keys.component';
import { TiposDatosComponent } from './modulos-apredizaje/tipos-datos/tipos-datos.component';
import { FuncionesTablasComponent } from './modulos-apredizaje/funciones-tablas/funciones-tablas.component';
import { AlterTablasComponent } from './modulos-apredizaje/alter-tablas/alter-tablas.component';
import { JoinsComponent } from './modulos-apredizaje/joins/joins.component';
import { SubconsultasComponent } from './modulos-apredizaje/subconsultas/subconsultas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio', 
        component: LadingPageComponent,
      },
      {
        path: 'crear-db', 
        component: CrearDbComponent,
      },
      {
        path: 'crear-tabla', 
        component: CrearTablaComponent,
      },
      {
        path: 'crear-registros',
        component: CrearRegistrosComponent,
      },
      {
        path: 'keys', 
        component: KeysComponent,
      },
      {
        path: 'tipos-datos', 
        component: TiposDatosComponent,
      },
      {
        path: 'funciones-tablas', 
        component: FuncionesTablasComponent,
      },
      {
        path: 'alter-tablas', 
        component: AlterTablasComponent,
      },
      {
        path: 'joins', 
        component: JoinsComponent,
      },
      {
        path: 'subconsultas', 
        component: SubconsultasComponent,
      },
      {
        path: 'crear-tabla', 
        component: CrearTablaComponent,
      },
      {
        path: '**',
        redirectTo: 'inicio'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
