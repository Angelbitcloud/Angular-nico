import { Injectable } from '@angular/core';
import { CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  public drags: string[] = [
    'IF', 
    'EXISTS',
    'CREATE',
    'DATABASE',
    'TABLE',
    'UPDATE',
    'FROM',
    'USER',
    'VALUES',
    'WHERE',
    'ORDER',
    'ORDER BY',
    'SELECT',
    'ADD',
    'ALTER',
    'AND',
    'NOT',
    'OR',
    'ASC',
    'AVG',
    'BY',
    'COLUMN',
    'CONNECT',
    'CONDICIONES',
    'COUNT',
    'DELETE',
    'DESC',
    'DROP',
    'PRIMARY KEY',
    'FOREIGN KEY',
    'GROUP',
    'HAVING',
    'INSERT',
    'INTO',
    'JOIN',
    'INNER JOIN',
    'LEFT JOIN',
    'RIGHT JOIN',
    'LIMIT',
    'MAX',
    'MIN',
    'NEW',
    'SUM',
    'INT',
    'VARCHAR',
    '*',
    '(',
    ')',
    ',',
    ';',
    ':',
    '=',
    '<>',
    '>',
    '<',
    'nommbreDatabase',
    'nombreTabla',
    'columna',
    'ID',
    'edad',
    'nombre',
    'apellido',
    'Jhon',
    'Doe',
    '30',
];

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
