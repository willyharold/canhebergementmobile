import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailshotelPage } from '../detailshotel/detailshotel';

/**
 * Generated class for the HebergementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hebergement',
  templateUrl: 'hebergement.html',
})
export class HebergementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HebergementPage');
  }

  detail(){
    this.navCtrl.push(DetailshotelPage)
  }
}
