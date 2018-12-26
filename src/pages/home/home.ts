import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HebergementPage } from '../hebergement/hebergement';
import { DadawebProvider } from '../../providers/dadaweb/dadaweb';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loader: any
  partenaire: any
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public data: DadawebProvider) {

      this.partenaire = []


    this.presentLoading();
      this.data.partenaire().then((data)=>{
        console.log(JSON.parse(data.data))
        var donnee = JSON.parse(data.data)
        //for(let index = 0; index < donnee.length; index++){
          var i = 1
          while(donnee[i]){
          var item ={non: donnee[i].nom, quartier: donnee[i].quartier}
           this.partenaire.push(item)
             i++  
        } 
        this.loader.dismiss();
        console.log("partenaire",this.partenaire)
        }).catch((e)=>{
          console.error(e)     
        })

    /*sprinbook
job archive*/
  }

  
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Patientez ...',
      spinner:'dots'
    });
    this.loader.present();

     setTimeout(() => {
    this.loader.dismiss();
  }, 5000);
  }

  openHotel(){
    this.navCtrl.push(HebergementPage)
  }
}
