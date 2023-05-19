import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../service/drag-drop.service';

@Component({
  selector: 'app-tipos-datos',
  templateUrl: './tipos-datos.component.html',
  styleUrls: ['./tipos-datos.component.css']
})
export class TiposDatosComponent{

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