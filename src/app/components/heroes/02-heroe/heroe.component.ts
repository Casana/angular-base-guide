import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hpl-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  features: string[] = ['strenght', 'supermind', 'elasticity', 'velocity']

  constructor() {
    console.log('constructor')
   }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  deleteFeature () {
    if(this.features.length) this.features.shift();
  }

}
