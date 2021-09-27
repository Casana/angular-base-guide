import { Component } from "@angular/core";

@Component({
    selector: 'hpl-contador',
    templateUrl: './hpl-contador.component.html',
    styleUrls: ['./hpl-contador.component.scss']
})
export class HplContadorComponent {
    counter: number = 0;
    base: number = 5;

    get sumCounter() {
      return this.counter + this.base;
    }

    get subsCounter() {
      return this.counter - this.base;
    }
  
    updateCounter (num: number) {
      this.counter +=5*num;
    };

}