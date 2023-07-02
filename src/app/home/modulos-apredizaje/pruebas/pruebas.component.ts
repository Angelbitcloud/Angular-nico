import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';
import { DataExplicacion } from 'src/app/core/model/interfaces/data-explicacion.interface';
import { ObtenerDataService } from 'src/app/core/model/service/obtener-data/obtener-data-service';
import { Tips } from 'src/app/core/model/interfaces/tips.interface';
import { ConsultasSqlService } from 'src/app/core/model/service/consultas-bd/consultas-sql.service';



@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {

  data: DataExplicacion;
  tips: Tips;
  resComparar: String;

  public drags: string[];
  public drops: string[];

  constructor(
    private dragDropService: DragDropService,
    private obtenerDataService: ObtenerDataService,
    private consultasSqlService: ConsultasSqlService
  ) {
    this.data = {
      titulo: '',
      explicacion: '',
      pregunta: '',
      imagen: '',
      respuesta: ''
    };
    this.tips = {
      sintaxis: "",
      divideConquista: "",
      documentacion: ""
    };
    this.drags = this.dragDropService.drags;
    this.drops = this.dragDropService.drops;
  }

  ngOnInit(): void {
    this.limpiarDrops();
  }
  
  compareArrays(): void {
    this.resComparar = '';
    let dropRespuesta = this.drops.join(' ').toUpperCase();
    this.consultasSqlService.peticionSql(dropRespuesta).subscribe(
      response => {
        this.resComparar = response;
        console.log('El response',response);
      },
      error => {
        this.tips = this.obtenerDataService.obtenerTips('tips');
        //crear un componente modal para mostrar estas sugerencias
        console.error('El error', error);
      }
    );
  }

  public limpiarDrops(): void {
    this.drops.length = 0;
  }

  // Llamar al método del servicio
  public dropItem($event) {
    this.dragDropService.drop($event);
  }
}