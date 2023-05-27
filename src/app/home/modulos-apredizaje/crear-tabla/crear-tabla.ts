import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';
import { ObtenerDataService } from 'src/app/core/model/service/obtener-data/obtener-data-service';
import { DataExplicacion } from 'src/app/core/model/interfaces/data-explicacion';
@Component({
  selector: 'crear-tabla',
  templateUrl: './crear-tabla.html',
  styleUrls: ['./crear-tabla.css']
})
export class CrearTablaComponent implements OnInit {

  data: DataExplicacion;

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
      }
    }

  // Ejemplo de uso en el componente

  // Acceder a las propiedades del servicio
  public numbers1 = this.dragDropService.listNumbers1;
  public numbers2 = this.dragDropService.listNumbers2;

  ngOnInit(): void {
    this.createTable();
  }

  // Llamar al método del servicio
  public dropItem($event) {
    this.dragDropService.drop($event);
  }

  public createTable(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('create-table');
  }

  public dropTable(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('drop-table');
  }
}

