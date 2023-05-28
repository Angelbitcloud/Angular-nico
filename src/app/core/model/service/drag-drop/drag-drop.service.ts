import { Injectable } from '@angular/core';
import { CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  public drags: string[] = ['CREATE','SUM','AVG','COUNT','CONNECT', 'USER', 'DATABASE', 'WHERE', 'JOIN', 'NEW', 'SELECT',
    'FROM', 'INSERT', 'UPDATE', 'DELETE', 'ALTER', 'TABLE', 'COLUMN', 'DROP','ORDER BY','DESC', 'OR','NOT','AND',
    'ADD', 'VALUES', 'INTO', '(', ')', 'GROUP', 'BY', 'HAVING', 'ORDER', 'ASC', ',','MAX','MIN', 'IF', 'EXISTS',
    'DESC', 'LIMIT', 'nombre_de_la_tabla',  'nommbreDatabase', ';', ':', 'columna', 'tipo_de_dato', 'condiciones'];
  public drops: string[] = [];

  constructor() { }

  drop($event: CdkDragDrop<string[]>) {
    if ($event.previousContainer === $event.container) {
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    } else {
      if ($event.container.data === this.drags) {
        // Eliminar el elemento de listNumbers2 si está presente
        const index = this.drops.indexOf($event.previousContainer.data[$event.previousIndex]);
        if (index !== -1) {
          this.drops.splice(index, 1);
        }
        
      } else if ($event.container.data === this.drops) {
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
