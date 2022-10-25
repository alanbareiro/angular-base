import { Component} from '@angular/core';
import {Persona} from '../interfaces/dbz.interface'
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //personajes : Persona[]=[];
  nuevo : Persona ={
    nombre:'',
    poder:0
  }
/*
  get personajes(): Persona[] {
    return this.dbzService.personajes;
  }
*/


  constructor() 
  { 
    //this.personajes = this.dbzService.personajes;
  }
}
