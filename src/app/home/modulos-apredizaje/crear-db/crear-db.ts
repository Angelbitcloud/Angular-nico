import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';
import { ObtenerDataService } from 'src/app/core/model/service/obtener-data/obtener-data-service';
import { DataExplicacion } from 'src/app/core/model/interfaces/data-explicacion';
import { Message } from 'primeng/api';

@Component({
  selector: 'crear-db',
  templateUrl: './crear-db.html',
  styleUrls: ['./crear-db.css']
})
export class CrearDbComponent implements OnInit {

  data: DataExplicacion;
  comparisonResult: string;
  otherArray: string[];
  messages: Message[];

  public numbers1: string[];
  public numbers2: string[];

  constructor(
    private dragDropService: DragDropService,
    private obtenerDataService: ObtenerDataService
  ) {
    this.data = {
      titulo: '',
      introduccion: '',
      explicacion: '',
      imagen: '',
      pregunta: ''
    };
    this.numbers1 = this.dragDropService.listNumbers1;
    this.numbers2 = this.dragDropService.listNumbers2;
  }

  ngOnInit(): void {
    this.createDataBase();
  }

  compareArrays(): void {
    const numbers2String = JSON.stringify(this.numbers2);
    const otherArrayString = JSON.stringify(this.otherArray);

    if (numbers2String === otherArrayString) {
      this.comparisonResult = 'La consulta es correcta';
    } else {
      this.comparisonResult = 'La consulta es incorrecta';
    }
  }

  public dropItem($event) {
    this.dragDropService.drop($event);
  }

  public createDataBase(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('create-database');
    this.otherArray = this.data.pregunta.split(' ');
    console.log(this.otherArray);
    this.numbers2.length = 0; // Reiniciar numbers2 a vacío
  }

  public dropDataBase(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('drop-databse');
    this.numbers2.length = 0; // Reiniciar numbers2 a vacío
  }

  public showDataBase(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('show-databse');
    this.otherArray = this.data.pregunta.split(' ');
    this.numbers2.length = 0; // Reiniciar numbers2 a vacío
  }
}
