import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';
@Component({
  selector: 'crear-tabla',
  templateUrl: './crear-tabla.html',
  styleUrls: ['./crear-tabla.css']
})
export class CrearTablaComponent {

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

