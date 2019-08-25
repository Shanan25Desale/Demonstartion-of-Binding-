import { Component, OnInit } from '@angular/core';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  /*Interpolation Binding */
  title:string="IMR College";

  constructor() {
    setTimeout(() => {
      this.title="MJ College"
    }, 5000);
   }

   /*Property Binding */
    name:string="Shanan";

    /*Event Binding */
   ABC:string="Shanan";
   updateText(){
     this.ABC="Shanan Desale";
   }

    ngOnInit() {
  }

  
  
}
