import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCentroPageRoutingModule } from './crear-centro-routing.module';

import { CrearCentroPage } from './crear-centro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCentroPageRoutingModule
  ],
  declarations: [CrearCentroPage]
})
export class CrearCentroPageModule {}
