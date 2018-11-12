import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HebergementPage } from '../hebergement/hebergement';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    /*sprinbook
job archive*/
  }

  openHotel(){
    this.navCtrl.push(HebergementPage)
  }
}
