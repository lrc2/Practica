import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoAvesPage } from './listado-aves';

@NgModule({
  declarations: [
    ListadoAvesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoAvesPage),
  ],
})
export class ListadoAvesPageModule {}
