import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {MenuPage} from "../menu/menu";
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginData = { username:'', password:'' };
  data: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,
              private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  doLogin() {
    this.presentLoading();
    this.restProvider.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      console.log (this.data);
      if (this.data.status=='OK'){
        if (this.data.id != '') {
          localStorage.setItem('token', this.data.id);
          localStorage.setItem('autenticado', 'true');

          this.navCtrl.push(MenuPage);
        }
      } else {
         this.presentToast(this.data.message);
      }

     }, (err) => {
      this.loading.dismiss();
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
    });
    this.loading.present();

  }
}
