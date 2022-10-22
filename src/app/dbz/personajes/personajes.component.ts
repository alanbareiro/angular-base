import { Component, Input } from '@angular/core';
import {Persona} from '../interfaces/dbz.interface'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  @Input() personajes : Persona[]=[];
  constructor() { }


}
