import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    MenuComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
