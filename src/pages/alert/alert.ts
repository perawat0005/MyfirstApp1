import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }
  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'ยินดีต้อนรับ',
      message: 'ทุกท่าน' ,
      buttons: ['ok']
    });
    alert.present()
  }


}
