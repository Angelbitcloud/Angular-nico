import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {

  public listNumbers1;
  public listNumbers2;

  constructor() { }

  ngOnInit() {
    this.listNumbers1 = ['CREATE', 'CONNECT', 'USER', 'WHERE', 'JOIN', 'NEW', 'SELECT', 
                          'FROM','RIGHT JOIN', 'INSERT', 'UPDATE', 'INNER JOIN', 'TABLE', 'COLUMN', 'DROP', 
                          'LEFT JOIN', 'INTO', '(',')', 'GROUP', 'BY', 'HAVING', 'ORDER', ',', 
                          'PRIMARY KEY', 'FOREING KEY','nombre_de_la_tabla',';',':','columna1','tipo_de_dato','condiciones'];
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