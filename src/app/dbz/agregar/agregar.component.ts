import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 1,
  }

  constructor (private DbzService: DbzService){}
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo);
    // this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
    console.table(this.personajes);
  }
}
