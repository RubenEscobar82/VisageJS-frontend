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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NewFolderModalComponent } from './new-folder-modal/new-folder-modal.component';
import { RenameFolderModalComponent } from './rename-folder-modal/rename-folder-modal.component';
import { NewProjectModalComponent } from './new-project-modal/new-project-modal.component';
import { NewSnippetModalComponent } from './new-snippet-modal/new-snippet-modal.component';
import { SnippetEditorModalComponent } from './snippet-editor-modal/snippet-editor-modal.component';
import { FoldersNavComponent } from './folders-nav/folders-nav.component';
import { FoldersListComponent } from './folders-list/folders-list.component';
import { SnippetProppertiesModalComponent } from './snippet-propperties-modal/snippet-propperties-modal.component';
import { DeletedComponent } from './deleted/deleted.component';

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
    PluginsComponent,
    NewFolderModalComponent,
    RenameFolderModalComponent,
    NewProjectModalComponent,
    NewSnippetModalComponent,
    SnippetEditorModalComponent,
    FoldersNavComponent,
    FoldersListComponent,
    SnippetProppertiesModalComponent,
    DeletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CodemirrorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
