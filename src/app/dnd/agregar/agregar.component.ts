import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dnd.interface';
import { DndService } from '../services/dnd.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  nuevo : Personaje = {
    nombre : '',
    experiencia: 0
  }

  // @Output() onNuevoPesonaje: EventEmitter<Personaje> = new EventEmitter()

  agregar(){
    // si no hay nada para agregar entonces salir del metodo
    if(this.nuevo.nombre.trim().length === 0){
      return
    }
    //this.onNuevoPesonaje.emit( this.nuevo )
    this.dndService.agregarPersonaje( this.nuevo )
    
    console.log(this.nuevo)    
    this.nuevo = { 
      nombre : '', 
      experiencia : 0
    }
  }
  constructor( private dndService : DndService ){

  }

}
