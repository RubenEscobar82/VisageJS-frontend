import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { EditorComponent } from './editor/editor.component';
import { EditorNavbarComponent } from './editor-navbar/editor-navbar.component';
import { FrameComponent } from './frame/frame.component';
import { IddleComponent } from './iddle/iddle.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectOverviewContainerComponent } from './project-overview-container/project-overview-container.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { IdleComponent } from './idle/idle.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { PluginsComponent } from './plugins/plugins.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardNavbarComponent,
    EditorComponent,
    EditorNavbarComponent,
    FrameComponent,
    IddleComponent,
    LandingComponent,
    ProjectListComponent,
    ProjectOverviewComponent,
    ProjectOverviewContainerComponent,
    SigninComponent,
    SignupComponent,
    NoSanitizePipe,
    IdleComponent,
    PluginsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CodemirrorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
