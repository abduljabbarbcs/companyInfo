import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AuthenticationService } from './_services/authentication.service';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./_guards/auth.guard";
import {CompanyComponent} from "./components/company/company.component";
import {HeaderComponent} from "./components/header/header.component";
import {ApiService} from "./_services/api.service";
import {CustomTableComponent} from "./components/custom-table/custom-table.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CompanyComponent,
    HeaderComponent,
    CustomTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    ApiService,
     AuthGuard,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
