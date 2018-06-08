import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import {Geolocation} from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { ListadoAvesPage } from '../pages/listado-aves/listado-aves';
import { RestProvider } from '../providers/rest/rest';
import {AnadirAvesPage} from "../pages/anadir-aves/anadir-aves";
import {DetalleAvePage} from "../pages/detalle-ave/detalle-ave";
import {AnadirAvistamientoPage} from "../pages/anadir-avistamiento/anadir-avistamiento";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    ListadoAvesPage,
    AnadirAvesPage,
    DetalleAvePage,
    AnadirAvistamientoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    ListadoAvesPage,
    AnadirAvesPage,
    DetalleAvePage,
    AnadirAvistamientoPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
