import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {Detalle} from "../../app/Models/Detalle"

/**
 * Generated class for the DetalleAvePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-ave',
  templateUrl: 'detalle-ave.html',
})
export class DetalleAvePage {

  birdDetail: Detalle = new Detalle(0,"","","",0, null);


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,
              private toastCtrl: ToastController, public loadingCtrl: LoadingController) {

  };

  ionViewWillEnter() {
    console.log('ionViewDidLoad DetalleAvePage');
    this.presentLoading();
    //this.showLoader();
    this.restProvider.getBirdDetail(this.navParams.get('id')).then((result) => {
      // this.loading.dismiss()
      this.birdDetail = result[0];
      console.log(this.birdDetail);

    }, (err) => {
      //this.loading.dismiss();
      console.log(err.valueOf());
      this.presentToast(err.message);
    });
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  presentLoading() {
    this.loading=this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }



}
