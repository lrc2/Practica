import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl} from '@angular/forms';
import {ListadoAvesPage} from "../listado-aves/listado-aves";
import { RestProvider } from '../../providers/rest/rest';
import {Geolocation} from '@ionic-native/geolocation'

/**
 * Generated class for the AnadirAvesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anadir-aves',
  templateUrl: 'anadir-aves.html',
})
export class AnadirAvesPage {
  myForm: FormGroup;
  id: String;
  loading: any;
  alert: any;
  visto: boolean= false ;
  lat: any;
  long: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public restProvider: RestProvider, private toastCtrl: ToastController, public loadingCtrl: LoadingController,
              private alertCtrl: AlertController, public geo:Geolocation) {

    this.id =localStorage.getItem('token');
    console.log(this.id);
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnadirAvesPage');


  }
  saveData(){
    if (this.visto) {
      this.myForm.value.lat = this.lat;
      this.myForm.value.long = this.long;
    }

    console.log(this.myForm.value);
    this.presentLoading();
    this.restProvider.addBird(this.myForm.value).then((result) => {
      this.loading.dismiss()
      this.presentAlert();
      this.alert.onDidDismiss(() =>{
        this.navCtrl.push(ListadoAvesPage);
      })

    }, (err) => {
      this.loading.dismiss();
      console.log(err.valueOf());
      this.presentToast(err.message);
    });
  }

  private createMyForm(){
    return this.formBuilder.group({
      idUser:[this.id,Validators.required],
      bird_name: ['', Validators.required],
      bird_description: ['', Validators.compose([Validators.minLength(20), Validators.required])]
    });
  }

  updateVisto(){

    if (this.visto){
      this.visto=false;
      this.myForm.removeControl('place');

    } else {

      var options = {
        enableHighAccuracy: true
      };

      this.geo.getCurrentPosition(options).then(pos =>{
        this.lat=pos.coords.latitude;
        this.long=pos.coords.longitude;

      }).catch(err => console.log(err));

      this.visto = true;
      this.myForm.addControl('place', new FormControl('', Validators.compose([
        Validators.required])));
    }

  }

   presentToast(msg){
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

  presentLoading(){
    this.loading=this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  presentAlert() {
     this.alert = this.alertCtrl.create({
      title: 'Añadir Ave',
      subTitle: 'Registro añadido correctamente',
      buttons: ['OK']
    });
    this.alert.present();
  }
}
