import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddProductPage } from './componet/add-product/add-product.page';
import { CenterXPage } from './componet/center-x/center-x.page';
import { HomeComponent } from './componet/home/home.component';
import { NewProductPage } from './componet/new-product/new-product.page';
import { ProfileComponent } from './componet/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:"home2",component:HomeComponent},
  {path:"home3",component:ProfileComponent},
  {path:"home4",component:AddProductPage},
  {path:"home5",component:NewProductPage},
  {path:"home6",component:CenterXPage},
  {
    path: 'add-product',
    loadChildren: () => import('./componet/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'new-product',
    loadChildren: () => import('./componet/new-product/new-product.module').then( m => m.NewProductPageModule)
  },
  {
    path: 'center-x',
    loadChildren: () => import('./componet/center-x/center-x.module').then( m => m.CenterXPageModule)
  },
  {
    path: 'pagina',
    loadChildren: () => import('./componet/pagina/pagina.module').then( m => m.PaginaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
