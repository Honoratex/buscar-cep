import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from './buscar/buscar.component';

import { BuscarCepService } from 'src/app/buscar-cep.service';

import {HttpClientModule} from '@angular/common/http';

import { NgxLoadingModule } from 'ngx-loading';

import { NgxMaskModule, IConfig } from 'ngx-mask';

import { SidebarModule } from 'ng-sidebar';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';

import { FormsModule }   from '@angular/forms';

const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    NgxMaskModule.forRoot(options),
    FormsModule
  ],
  providers: [BuscarCepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
