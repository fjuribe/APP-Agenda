import { Component } from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Lista} from '../../models/lista.models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // mostrar:any[]=[];
  constructor(public deseosService:DeseosService,private router:Router,public alertController: AlertController) {

      // this.mostrar=this.deseosService.listas;

  }

async agregarLista(){
	//this.router.navigateByUrl('tabs/tab1/agregar');

	 const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs:[
      {
          name:'titulo',
          type:'text',
          placeholder:'Nombre de la lista'
        }
      ],
      buttons: [
             {
             	text:'Cancelar',
             	role:'Cancel',
             	handler:()=>{
             		console.log('Cancelar');
             	}
             },
             {
             	text:'Crear',
             	handler:(data)=>{
                  console.log(data);

                  if(data.titulo.length===0){
                           return;
                  }

                 const listaId = this.deseosService.crearLista(data.titulo);
                  

                  //tengo que crear la lista
                  this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
             	}
             }
        ]
    });

	 alert.present();
}

listaSeleccionar(lista:Lista){
    console.log(lista);

    //redirecina a la vista que deseo redireccionar
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
}
}
