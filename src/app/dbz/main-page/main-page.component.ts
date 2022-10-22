import { Component} from '@angular/core';
import {Persona} from '../interfaces/dbz.interface'
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

personajes : Persona[]=[
  {
    nombre: 'Goku',
    poder:250000
  },
  {
    nombre:'Vegeta',
    poder:220000
  },
  {
    nombre:'Picoro',
    poder:170000
  }
]
  nuevo : Persona ={
    nombre:'',
    poder:0
  }

  agregarNuevoPersonaje(argument: Persona) : void{	
    this.personajes.push(argument);
    //console.log(argument);     
  }
 
  constructor(public dbzService : DbzService) { }
}
