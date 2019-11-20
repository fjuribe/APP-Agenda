import { Component } from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // mostrar:any[]=[];
  constructor(public deseosService:DeseosService) {

      // this.mostrar=this.deseosService.listas;
  }

}
