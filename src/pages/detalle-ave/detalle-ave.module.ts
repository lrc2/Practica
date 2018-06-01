import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleAvePage } from './detalle-ave';

@NgModule({
  declarations: [
    DetalleAvePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleAvePage),
  ],
})
export class DetalleAvePageModule {}
