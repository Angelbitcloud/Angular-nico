import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';
import { DataExplicacion } from 'src/app/core/model/interfaces/data-explicacion';
import { ObtenerDataService } from 'src/app/core/model/service/obtener-data/obtener-data-service';


@Component({
  selector: 'app-subconsultas',
  templateUrl: './subconsultas.component.html',
  styleUrls: ['./subconsultas.component.css']
})
export class SubconsultasComponent implements OnInit {

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
    this.udateDelete();
  }

  // Llamar al método del servicio
  public dropItem($event) {
    this.dragDropService.drop($event);
  }

  public udateDelete(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('udate-delete');
  }

  public existNotExist(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('exist-not-exist');
  }

  public anySomeAll(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('any-some-all');
  }

}
