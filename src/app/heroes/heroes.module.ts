import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    // dicen que cosas o componentes contiene el modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // que cosas quiero que sean visibles por fuera de mi modulo
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    // aqui van modulos
    imports: [
        CommonModule
    ]

})
export class HeroesModule{

}