import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  public heroes : string[] = ["Spider-man", "Hulk", "Ironman", "Super-man"];
  public heroeBorrado? : string = "";
  borrarHeroe(){
    let prueba = this.heroes.pop() || "";
    this.heroeBorrado = prueba;
    console.log("borrando...",prueba);
  }
}
