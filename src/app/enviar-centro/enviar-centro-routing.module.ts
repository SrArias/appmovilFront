import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviarCentroPage } from './enviar-centro.page';

const routes: Routes = [
  {
    path: '',
    component: EnviarCentroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviarCentroPageRoutingModule {}
