import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCentroPage } from './crear-centro.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCentroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCentroPageRoutingModule {}
