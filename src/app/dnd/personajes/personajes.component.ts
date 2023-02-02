import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dnd.interface';
import { DndService } from '../services/dnd.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //@Input() personajes : Personaje[] = [];

  get personajes(): Personaje[]{
    return this.dndService.personajes
  }

  constructor( private dndService : DndService ){ }

}
