import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tipos-datos',
  templateUrl: './tipos-datos.component.html',
  styleUrls: ['./tipos-datos.component.css']
})
export class TiposDatosComponent implements OnInit {

  public listNumbers1;
  public listNumbers2;

  constructor() { }

  ngOnInit() {
    this.listNumbers1 = ['CREATE', 'INT', 'VARCHAR(tamaño)', 'WHERE', 'JOIN', 'NEW', 'SELECT', 
                          'FROM','RIGHT JOIN', 'INSERT', 'UPDATE', 'INNER JOIN', 'TABLE', 'COLUMN', 'DATE', 
                          'LEFT JOIN', 'INTO', '(',')', 'GROUP', 'BY', 'DECIMAL(precision, escala)', 'ORDER', ',', 
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