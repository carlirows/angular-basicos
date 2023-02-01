import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  // se ejecuta antes de la renderizacino del componente
  // constructor(){ }
  // se usa para incializar cosas como traer informacion de un servicio
  // ngOnInit():void{}

  heroes : string[] = ['Krom', 'Sam', 'Mel', 'Eriale', 'Santi'];
  heroeBorrado: string = ''

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
