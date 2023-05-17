import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'crear-db',
  templateUrl: './crear-db.html',
  styleUrls: ['./crear-db.css']
})
export class CrearDbComponent implements OnInit {

  public listNumbers1;
  public listNumbers2;

  constructor() { }

  ngOnInit() {
    this.listNumbers1 = ['CREATE','CONNECT','USER ','DATABASE','WHERE','JOIN','NEW','nombre_de_la_base_de_datos','USE',';',':'];
    this.listNumbers2 = [];  
  }

  drop($event: CdkDragDrop<number[]>){

    if($event.previousContainer === $event.container){
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      )
    }else{
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }


  }

}
