import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { DevolucionesPageRoutingModule } from './devoluciones-routing.module';

import { DevolucionesPage } from './devoluciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DevolucionesPageRoutingModule
  ],
  declarations: [DevolucionesPage]
})
export class DevolucionesPageModule {}
