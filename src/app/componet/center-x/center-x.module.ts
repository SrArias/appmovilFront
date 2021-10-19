import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenterXPageRoutingModule } from './center-x-routing.module';

import { CenterXPage } from './center-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenterXPageRoutingModule
  ],
  declarations: [CenterXPage]
})
export class CenterXPageModule {}
