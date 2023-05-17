import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-joins',
  templateUrl: './joins.component.html',
  styleUrls: ['./joins.component.css']
})
export class JoinsComponent implements OnInit {

  public listNumbers1;
  public listNumbers2;

  constructor() { }

  ngOnInit() {
    this.listNumbers1 = ['CREATE', 'CONNECT', 'USER', 'DATABASE', 'WHERE', 'JOIN', 'NEW', 'SELECT', 
                          'FROM','RIGHT JOIN', 'INSERT', 'UPDATE', 'INNER JOIN', 'TABLE', 'COLUMN', 'DROP', 
                          'LEFT JOIN', 'VALUES', 'INTO', '(',')', 'GROUP', 'BY', 'HAVING', 'ORDER', 'ASC',',', 
                          'DESC', 'LIMIT','nombre_de_la_tabla',';',':','columna1','tipo_de_dato','condiciones'];
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