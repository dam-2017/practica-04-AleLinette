import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultado : string;
  numero1 : number;
  numero2 : number;

  constructor(public navCtrl: NavController) {
    this.numero1=this.numero2=0;
    this.resultado = "";
  }

  suma(){
    this.resultado = String(Number(this.numero1) + Number(this.numero2));
  }

  resta(){
    this.resultado = String(Number(this.numero1) - Number(this.numero2));
  }

  mul(){
    this.resultado = String(Number(this.numero1) * Number(this.numero2)); 
   }

  div(){
    this.resultado = String(Number(this.numero1) / Number(this.numero2));  
 }

  mod(){
    this.resultado = String(Number(this.numero1) %  Number(this.numero2));
  }

}
