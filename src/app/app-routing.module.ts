import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IdleComponent } from './idle/idle.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignupGuardService } from './signup-guard.service';
import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [
  {
    path: '', component: LandingComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'signin', component: SigninComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'dashboard', component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'editor/:folderId/:projectId', component: IdleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'signup', component: SignupComponent,
    canActivate: [SignupGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
