import { Injectable } from '@angular/core';
import { CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  public listNumbers1: string[] = ['CREATE','SUM','AVG','COUNT','CONNECT', 'USER', 'DATABASE', 'WHERE', 'JOIN', 'NEW', 'SELECT',
    'FROM', 'INSERT', 'UPDATE', 'DELETE', 'ALTER', 'TABLE', 'COLUMN', 'DROP','ORDER BY','DESC', 'OR','NOT','AND',
    'ADD', 'VALUES', 'INTO', '(', ')', 'GROUP', 'BY', 'HAVING', 'ORDER', 'ASC', ',','MAX','MIN',
    'DESC', 'LIMIT', 'nombre_de_la_tabla',  'nombre_de_la_base_de_datos', ';', ':', 'columna', 'tipo_de_dato', 'condiciones'];
  public listNumbers2: string[] = [];

  constructor() { }

  drop($event: CdkDragDrop<string[]>) {
    if ($event.previousContainer === $event.container) {
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    } else {
      if ($event.container.data === this.listNumbers1) {
        // Eliminar el elemento de listNumbers2 si está presente
        const index = this.listNumbers2.indexOf($event.previousContainer.data[$event.previousIndex]);
        if (index !== -1) {
          this.listNumbers2.splice(index, 1);
        }
        
      } else if ($event.container.data === this.listNumbers2) {
        // Copiar el elemento a listNumbers2
        copyArrayItem(
          $event.previousContainer.data,
          $event.container.data,
          $event.previousIndex,
          $event.currentIndex
        );
      }
    }
  }
}
