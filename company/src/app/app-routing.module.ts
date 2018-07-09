import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./_guards/auth.guard";
import {HomeComponent} from "./components/home/home.component";
import {CompanyComponent} from "./components/company/company.component";

const routes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuard]},
   { path: 'company', component: CompanyComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
