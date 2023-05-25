import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';

@Component({
  selector: 'crear-registros',
  templateUrl: './crear-registros.html',
  styleUrls: ['./crear-registros.css']
})
export class CrearRegistrosComponent  {

  constructor(private dragDropService: DragDropService) { }

  // Ejemplo de uso en el componente

  // Acceder a las propiedades del servicio
  public numbers1 = this.dragDropService.listNumbers1;
  public numbers2 = this.dragDropService.listNumbers2;

  // Llamar al método del servicio
  public dropItem($event) {
    this.dragDropService.drop($event);
  }
}