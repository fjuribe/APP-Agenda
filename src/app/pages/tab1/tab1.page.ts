import { Component } from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // mostrar:any[]=[];
  constructor(public deseosService:DeseosService,private router:Router) {

      // this.mostrar=this.deseosService.listas;


  }



agregarLista(){
	this.router.navigateByUrl('tabs/tab1/agregar');
}
}
