import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';
import { DataExplicacion } from 'src/app/core/model/interfaces/data-explicacion';
import { ObtenerDataService } from 'src/app/core/model/service/obtener-data/obtener-data-service';

@Component({
  selector: 'app-tipos-datos',
  templateUrl: './tipos-datos.component.html',
  styleUrls: ['./tipos-datos.component.css']
})
export class TiposDatosComponent implements OnInit {

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
    this.enteroDato();
  }

  // Llamar al método del servicio
  public dropItem($event) {
    this.dragDropService.drop($event);
  }

  public enteroDato(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('entero-dato');
  }

  public decimalDato(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('decimal-dato');
  }

  public cadenasDato(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('cadenas-dato');
  }

  public fechaDato(): void {
    this.data = this.obtenerDataService.obtenerObjetoData('fecha-dato');
  }
  
}