import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuscarComponent  } from '../app/buscar/buscar.component';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component'
import { AuthGuard } from './account/shared/auth.guard';
import { IndexComponent } from './index/index.component';


const routes: Routes = [


  {
    path: '',
    component: IndexComponent,
    children: [
      {path: '',component: HomeComponent},
      {path: 'home',component: HomeComponent},
      {path: 'buscar-cep', component: BuscarComponent}
    ],
    canActivate: [AuthGuard]
  },

  {
    path: '',
    component: LoginComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login',component: LoginComponent},
    ]
  },


  
  // { path: '', component: HomeComponent/*, canActivate: [AuthGuard]*/},
  // { path: 'home', component: HomeComponent/*, canActivate: [AuthGuard]*/},
  // { path: 'buscar-cep', component: BuscarComponent/*, canActivate: [AuthGuard]*/},
  // { path: 'login', component: LoginComponent/*, canActivate: [AuthGuard]*/},
  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
