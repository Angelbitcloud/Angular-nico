import { Component } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';



@Component({
  selector: 'app-funciones-tablas',
  templateUrl: './funciones-tablas.component.html',
  styleUrls: ['./funciones-tablas.component.css']
})
export class FuncionesTablasComponent {

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
