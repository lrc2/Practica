import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {ListadoAvesPage} from "../listado-aves/listado-aves";
import {AnadirAvesPage} from "../anadir-aves/anadir-aves";
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  listadoAves(){
    this.navCtrl.push(ListadoAvesPage);
  }
  anadirAves(){
    this.navCtrl.push(AnadirAvesPage);
  }
  info(){
    localStorage.setItem('token', "");
    localStorage.setItem('autenticado', 'false');

    this.navCtrl.push(LoginPage);
  }
  desconectar(){
    localStorage.setItem('token', "");
    localStorage.setItem('autenticado', 'false');
    this.navCtrl.popToRoot();
  }
  navegateMenu(){
    this.navCtrl.push(MenuPage);
  }
}
