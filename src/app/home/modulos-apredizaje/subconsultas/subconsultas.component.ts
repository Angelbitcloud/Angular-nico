import { Component } from '@angular/core';
import { DragDropService } from '../service/drag-drop.service';


@Component({
  selector: 'app-subconsultas',
  templateUrl: './subconsultas.component.html',
  styleUrls: ['./subconsultas.component.css']
})
export class SubconsultasComponent {

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
