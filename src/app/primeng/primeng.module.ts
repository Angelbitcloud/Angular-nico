import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';




@NgModule({
  exports:[
    ButtonModule,
    MenubarModule,
    AutoCompleteModule,
    CardModule,
  ],
})
export class PrimengModule { }
