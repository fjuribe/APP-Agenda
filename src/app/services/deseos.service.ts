import { Injectable } from '@angular/core';
import {Lista} from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[]=[];
  
  constructor() { 

  // console.log('Servicio inicializado');

  const lista1=new Lista('recolectar herramientas del infinito');
  const lista2=new Lista('heroe a desaparecer');

  this.listas.push(lista1,lista2);

  console.log(this.listas);

}
}