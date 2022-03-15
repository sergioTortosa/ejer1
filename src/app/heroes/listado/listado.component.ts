import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {


  heroes: string[] = ['spiderrman', 'ironman','hulk', 'thor','sergio']
  heroeBorrado: string = '';
  borrarHeroe() {

    
    this.heroeBorrado = this.heroes.shift() || '';
    console.log("borrando...");
   
    
  }





}