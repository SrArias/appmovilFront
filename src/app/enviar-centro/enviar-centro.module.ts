import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarCentroPageRoutingModule } from './enviar-centro-routing.module';

import { EnviarCentroPage } from './enviar-centro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviarCentroPageRoutingModule
  ],
  declarations: [EnviarCentroPage]
})
export class EnviarCentroPageModule {}
