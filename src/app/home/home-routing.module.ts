import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LadingPageComponent } from './lading-page/lading-page.component';
import { BasicoComponent } from './modulos-apredizaje/basico/basico.component';
import { IntermedioComponent } from './modulos-apredizaje/intermedio/intermedio.component';
import { AvanzadoComponent } from './modulos-apredizaje/avanzado/avanzado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio', 
        component: LadingPageComponent,
      },
      {
        path: 'basico', 
        component: BasicoComponent,
      },
      {
        path: 'intermedio',
        component: IntermedioComponent,
      },
      {
        path: 'avanzado', 
        component: AvanzadoComponent,
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
