import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {

    public nombre : string = 'Krom'
    public edad : number = 23
    public d20 : number = 0
    public raza: string = 'Dragonborne'
    public fuerza: number = 22
    public inteligencia: number = 14
    public destreza : number = 16
    public sabiduria: number = 12
    public constitucion: number = 16
    public carisma: number = 13
    
    get encabezado() {
        return `${this.nombre} el ${this.raza}`
    }

    throwDice(valor :  any): number {
        return this.d20 = Math.floor(Math.random() * valor) + 1;
      }

}