import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RestProvider} from "../../providers/rest/rest";
import { FormControl} from '@angular/forms';
import {ListadoAvesPage} from "../listado-aves/listado-aves";
import {DetalleAvePage} from "../detalle-ave/detalle-ave";

/**
 * Generated class for the AnadirAvistamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anadir-avistamiento',
  templateUrl: 'anadir-avistamiento.html',
})
export class AnadirAvistamientoPage {
  myForm: FormGroup;
  idAve: String;
  loading: any;
  alert: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
              public restProvider: RestProvider, private toastCtrl: ToastController, public loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {

    this.idAve = this.navParams.get('idAve');
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnadirAvistamientoPage');
  }

  saveData(){
    var lat:number;
    var long:number;

    console.log(this.myForm.value);
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      console.log(lat);
      console.log(long);
        });



    this.restProvider.addSighting(this.myForm.value).then((result) => {
      // this.loading.dismiss()
      this.presentAlert();
      this.alert.onDidDismiss(() =>{
        this.navCtrl.pop();
      })

    }, (err) => {
      //this.loading.dismiss();
      console.log(err.valueOf());
      this.presentToast(err.message);
    });
  }

  private createMyForm(){
    return this.formBuilder.group({
      idAve:[this.idAve,Validators.required],
      place: ['', Validators.required],
      long: [''],
      lat: ['']
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

  presentAlert() {
    this.alert = this.alertCtrl.create({
      title: 'Añadir Avistamiento',
      subTitle: 'Registro añadido correctamente',
      buttons: ['OK']
    });
    this.alert.present();
  }
}
