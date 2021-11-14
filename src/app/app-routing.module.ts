import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'crear-producto/:id',
    loadChildren: () => import('./pages/crear-producto/crear-producto.module').then( m => m.CrearProductoPageModule)
  },
  {
    path: 'crear-centro',
    loadChildren: () => import('./pages/crear-centro/crear-centro.module').then( m => m.CrearCentroPageModule)
  },
  {
    path: 'enviar-centro/:id',
    loadChildren: () => import('./pages/enviar-centro/enviar-centro.module').then( m => m.EnviarCentroPageModule)
  },
  {
    path: 'devoluciones',
    loadChildren: () => import('./pages/devoluciones/devoluciones.module').then( m => m.DevolucionesPageModule)
  },
  {
    path: 'productos/:id',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'centros',
    loadChildren: () => import('./pages/centros/centros.module').then( m => m.CentrosPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
