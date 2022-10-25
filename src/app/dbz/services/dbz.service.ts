import { Injectable } from "@angular/core";
import {Persona} from "../interfaces/dbz.interface"

@Injectable()
export class DbzService{

 private _personajes : Persona[]=[
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

 get personajes(): Persona[] {
  return [...this._personajes];
 }

  constructor() {
    console.log('Servicio inicializado');
  }

  agregarPersonaje(argumento:Persona){
    this._personajes.push(argumento); 
  }
}