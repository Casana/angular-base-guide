import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HplContadorComponent } from './01-contador/hpl-contador.component';
import { HeroeComponent } from "./02-heroe/heroe.component";

@NgModule({
    declarations: [
        HeroeComponent,
        HplContadorComponent
    ],
    exports: [
        HplContadorComponent
    ],
    imports: [
        CommonModule
    ]

})
export class HeroesModule {

}