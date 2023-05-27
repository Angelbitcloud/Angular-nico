import { Injectable } from '@angular/core';
import { DataExplicacion } from '../../interfaces/data-explicacion.interface';
import * as jsonInfo from '../../../../../assets/json-base/data.json';
import { Tips } from '../../interfaces/tips.interface';

@Injectable({
    providedIn: 'root'
  })
export class ObtenerDataService { 

  private data: DataExplicacion;

  private tips: Tips;

  constructor() { 
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
  }

  coparaRespuestas(dropRespuesta: String, jsonRespuesta: String) : [String, boolean] {
    let mensaje: String;
    let iguales: boolean;
    if (dropRespuesta === jsonRespuesta) {
      mensaje = 'Excelente respuesta correcta';
      iguales = true;
    } else {
      mensaje = 'Ups! Intenta nuevamente';
      iguales = false;
    }

    return [mensaje, iguales];
  }

  obtenerTips(nombre: String): Tips {

    this.tips = jsonInfo[`${nombre}`];
    return this.tips;

  }

  obtenerObjetoData(nombre: String): DataExplicacion {

    this.data = jsonInfo[`${nombre}`];
    return this.data;

  }
    
}