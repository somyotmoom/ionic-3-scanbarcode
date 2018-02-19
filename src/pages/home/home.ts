import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

scanData : {};
options :BarcodeScannerOptions;

constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  private barcodeScanner: BarcodeScanner) {
}    

scan(){
  this.options = {
      prompt : "สแกนบาร์โค้ดของคุณ "
  }
  this.barcodeScanner.scan(this.options).then((barcodeData) => {

      console.log(barcodeData);
      this.scanData = barcodeData;
  }, (err) => {
      console.log("Error occured : " + err);
  });         
}    

}