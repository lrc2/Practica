import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import { RestProvider } from '../../providers/rest/rest';
import { LoadingController } from 'ionic-angular';
import {DetalleAvePage} from "../detalle-ave/detalle-ave";
import {AnadirAvesPage} from "../anadir-aves/anadir-aves";

/**
 * Generated class for the ListadoAvesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado-aves',
  templateUrl: 'listado-aves.html',
})
export class ListadoAvesPage {

  birds: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,
              private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoAvesPage');
    this.presentLoading();

    var id =localStorage.getItem('token');
    this.restProvider.getBirds(id).then((result) => {
      this.loading.dismiss()
      this.birds = result;

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

  editar(id){
    this.navCtrl.push(DetalleAvePage,{'id': id} );
  }
  anadirAve(id){
    this.navCtrl.push(AnadirAvesPage,{'id': id} );
  }
  isMine(c){
    if (c.mine==1){
      return true;
    }
    else return false;
  }
  navegateMenu(){
    this.navCtrl.push(MenuPage);
  }
}
