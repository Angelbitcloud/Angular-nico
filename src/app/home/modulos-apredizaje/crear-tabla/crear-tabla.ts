import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'crear-tabla',
  templateUrl: './crear-tabla.html',
  styleUrls: ['./crear-tabla.css']
})
export class CrearTablaComponent implements OnInit {
  public listNumbers1;
  public listNumbers2;

  constructor() { }

  ngOnInit() {
    this.listNumbers1 = ['CREATE', 'CONNECT', 'USER', 'DATABASE', 'WHERE', 'JOIN', 'NEW', 'SELECT', 
                          'FROM', 'INSERT', 'UPDATE', 'DELETE', 'ALTER', 'TABLE', 'COLUMN', 'DROP', 
                          'ADD', 'VALUES', 'INTO', '(',')', 'GROUP', 'BY', 'HAVING', 'ORDER', 'ASC', 
                          'DESC', 'LIMIT','nombre_de_la_tabla',';',':'];
    this.listNumbers2 = [];
  }

  drop($event: CdkDragDrop<number[]>) {

    if ($event.previousContainer === $event.container) {
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      )
    } else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
  }
}
