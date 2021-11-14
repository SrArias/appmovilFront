import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarCentroPageRoutingModule } from './enviar-centro-routing.module';

import { EnviarCentroPage } from './enviar-centro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnviarCentroPageRoutingModule
  ],
  declarations: [EnviarCentroPage]
})
export class EnviarCentroPageModule {}
