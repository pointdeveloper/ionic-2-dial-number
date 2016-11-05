import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
declare var window;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
 callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
    }
}
