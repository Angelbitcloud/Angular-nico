import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';
import { ObtenerDataService } from 'src/app/core/model/service/obtener-data/obtener-data-service';
import { DataExplicacion } from 'src/app/core/model/interfaces/data-explicacion';

@Component({
  selector: 'crear-db',
  templateUrl: './crear-db.html',
  styleUrls: ['./crear-db.css']
})
export class CrearDbComponent implements OnInit {

  data: DataExplicacion;

  constructor(
      private dragDropService: DragDropService,
      private obtenerDataService: ObtenerDataService
  ) {
    this.data = {
      titulo: '',
      introduccion: '',
      explicacion: '',
      imagen: ''
    }
  }

  // Ejemplo de uso en el componente

  // Acceder a las propiedades del servicio
  public numbers1 = this.dragDropService.listNumbers1;
  public numbers2 = this.dragDropService.listNumbers2;

  ngOnInit(): void {
    this.createDataBase();
  }

  // Llamar al método del servicio
  public dropItem($event) {
    this.dragDropService.drop($event);
  }

  public createDataBase(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('create-database');
  }

  public dropDataBase(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('drop-databse');
  }

  public showDataBase(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('show-databse');
  }
}
