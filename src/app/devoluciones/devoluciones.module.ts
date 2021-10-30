import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevolucionesPageRoutingModule } from './devoluciones-routing.module';

import { DevolucionesPage } from './devoluciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevolucionesPageRoutingModule
  ],
  declarations: [DevolucionesPage]
})
export class DevolucionesPageModule {}
