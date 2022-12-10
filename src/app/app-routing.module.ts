import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'characters',
        loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule),
      },
    ]
  },
  // TODO: Autenticación
  /*
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./siloui/silo-auth/silo-auth.module').then(m => m.SiloAuthModule)
  },
  */
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
