import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';
import { DataExplicacion } from 'src/app/core/model/interfaces/data-explicacion';
import { ObtenerDataService } from 'src/app/core/model/service/obtener-data/obtener-data-service';

@Component({
  selector: 'crear-registros',
  templateUrl: './crear-registros.html',
  styleUrls: ['./crear-registros.css']
})
export class CrearRegistrosComponent implements OnInit {

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
    this.insertConsulta();
  }

  // Llamar al método del servicio
  public dropItem($event) {
    this.dragDropService.drop($event);
  }

  public insertConsulta(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('insert-consulta');
  }

  public selectConsulta(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('select-consulta');
  }

  public whereConsulta(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('where-consulta');
  }

  public deleteConsulta(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('delete-consulta');
  }

}