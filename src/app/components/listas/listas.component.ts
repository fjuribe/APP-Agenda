import { Component, OnInit,Input } from '@angular/core';
import {Lista} from '../../models/lista.models';
import {DeseosService} from '../../services/deseos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

@Input() terminada=true;

  constructor(public deseosService:DeseosService,private router:Router) { }

  ngOnInit() {}


  listaSeleccionar(lista:Lista){
   if (this.terminada) {
    //redirecina a la vista que deseo redireccionar
    this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
   	   
   }else{
   	this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
   }



}


borrarLista(lista:Lista){
	this.deseosService.borrarLista(lista);
	console.log("lista borrada exitosamente");
}

}
