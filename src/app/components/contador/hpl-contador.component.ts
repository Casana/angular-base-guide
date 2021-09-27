import { Component } from "@angular/core";

@Component({
    selector: 'hpl-contador',
    templateUrl: './hpl-contador.component.html',
    styleUrls: ['./hpl-contador.component.scss']
})
export class HplContadorComponent {
    counter: number = 0;
    base: number = 5;
  
    updateCounter (num: number) {
      this.counter +=5*num;
    };

}