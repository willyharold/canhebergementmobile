//import { HttpClient } from '@angular/common/http';
import { HTTP, HTTPResponse } from '@ionic-native/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DadawebProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadawebProvider {

  adresse: string="http://192.168.43.119/canhebergement/web/app_dev.php/";

  constructor(public http: HTTP) {
    console.log('Hello DadawebProvider Provider');
  }

  // liste des partenaire

  async partenaire():Promise<HTTPResponse>{
    var url = this.adresse+ "api/partenaire"
    /*await this.storage.get("token").then((data)=>{
      var tmp ="Bearer "+ data 
      this.http.setHeader("token","Authorization",tmp)
    })*/
     return  this.http.get(url,{}, {})
  }
}
