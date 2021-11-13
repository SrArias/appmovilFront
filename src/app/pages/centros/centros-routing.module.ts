import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrosPage } from './centros.page';

const routes: Routes = [
  {
    path: '',
    component: CentrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentrosPageRoutingModule {}
