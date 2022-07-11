import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Modules/auth/login-page/login-page.component';
import { HomeComponent } from './Modules/home-page/home/home.component';

const routes: Routes = [
  {path: '', component:  LoginPageComponent},
  {path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
