import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrosPageRoutingModule } from './centros-routing.module';

import { CentrosPage } from './centros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosPageRoutingModule
  ],
  declarations: [CentrosPage]
})
export class CentrosPageModule {}
