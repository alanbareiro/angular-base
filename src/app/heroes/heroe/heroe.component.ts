import { Component } from "@angular/core";

@Component({
    selector: 'app-Heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    public nombre: string = "Iron Man!";
    public edad : number = 45;

    get nombreCapitalizado() : string { 
        return this.nombre.toUpperCase();
    }


    cambiarNombre() : void {
        this.nombre = "Spider-Man";
    }
    cambiarEdad(): void {
        this.edad = 22;
    }
    obtenerNombre() : string{
        return  `${this.nombre} - ${this.edad}`
    }
}