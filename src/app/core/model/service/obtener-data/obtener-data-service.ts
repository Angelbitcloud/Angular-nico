import { Injectable } from '@angular/core';
import { DataExplicacion } from '../../interfaces/data-explicacion';
import * as jsonInfo from '../../../../../assets/json-base/data.json';

@Injectable({
    providedIn: 'root'
  })
export class ObtenerDataService { 

  private data: DataExplicacion;

  constructor() { 
    this.data = {
      titulo: '',
      introduccion: '',
      explicacion: '',
      imagen: '',
      pregunta: ''
    }
  }

  obtenerObjetoData(nombre: String): DataExplicacion {

    const jsonData = jsonInfo[`${nombre}`];
    this.data.titulo = jsonData.titulo;
    this.data.explicacion = jsonData.explicacion;
    this.data.introduccion = jsonData.introduccion;
    this.data.imagen = jsonData.imagen;
    this.data.pregunta = jsonData.pregunta;
    return this.data;
  }
    
}