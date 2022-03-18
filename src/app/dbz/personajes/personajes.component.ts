import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
import { DbzModule } from '../dbz.module';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

//  @Input() personajes: Personaje[]= [];
 get personajes() {
   
  return this.DbzService.personajes;
 }
 constructor(private DbzService: DbzService) {

}
}