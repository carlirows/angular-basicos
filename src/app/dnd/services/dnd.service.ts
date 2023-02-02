import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dnd.interface";

@Injectable()
export class DndService {

    private _personajes : Personaje[] = []

    get personajes() : Personaje[]{
        return [...this._personajes]
    }

    // constructor(){
    //     console.log('servcio inicializado')
    // }

    agregarPersonaje( personaje : Personaje){
        this._personajes.push(personaje)
    }
}