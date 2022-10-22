import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../interfaces/dbz.interface'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Persona = {
    nombre: '',
    poder: 0
  }
  @Output() onNuevoPersonaje: EventEmitter<Persona> = new EventEmitter();

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) return;
    this.onNuevoPersonaje.emit(this.nuevo);
    //console.log('ANTES DE this.nuevo ', this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    //console.log('DESPUES DE this.nuevo ',this.nuevo);
  }

  constructor() { }

}
