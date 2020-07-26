import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IdleComponent } from './idle/idle.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'signin', component: SigninComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'editor', component: IdleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
