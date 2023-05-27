import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';
import { DataExplicacion } from 'src/app/core/model/interfaces/data-explicacion';
import { ObtenerDataService } from 'src/app/core/model/service/obtener-data/obtener-data-service';

@Component({
  selector: 'app-alter-tablas',
  templateUrl: './alter-tablas.component.html',
  styleUrls: ['./alter-tablas.component.css']
})
export class AlterTablasComponent implements OnInit {

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
    this.alterTableDrop();
  }

  // Llamar al método del servicio
  public dropItem($event) {
    this.dragDropService.drop($event);
  }

  public alterTableDrop(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('alter-table-drop');
  }

  public alterTableAdd(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('alter-table-add');
  }

  public alterTableRename(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('alter-table-rename');
  }
}