import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConnectService } from '../connect-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DownloadService } from '../download.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-external-editor',
  templateUrl: './external-editor.component.html',
  styleUrls: ['./external-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExternalEditorComponent implements OnInit {
  projectName: string = "";
  project: any = {};
  htmlContent:string = "";
  jsContent:string = "";
  cssContent:string = "";
  frameContent: string = ``;
  includeBootstrap: boolean = false;
  includeMaterialize: boolean = false;
  includeJQuery: boolean = false;
  includeFontawesome: boolean = false;
  bootstrap = "";
  materializeCSS = "";
  materializeJS = "";
  jquery = "";
  fontawesome="";
  public isMenuCollapsed = true;
  username: string = "username";
  constructor( private router: Router, private cookieService: CookieService, private connectService: ConnectService, private activatedRoute: ActivatedRoute, private download: DownloadService) { }

  ngOnInit(): void {
    this.username=this.cookieService.get('userName');
    this.getContent();
  }

  getContent(){
    this.connectService.getProject(this.activatedRoute.snapshot.paramMap.get('folderId'),this.activatedRoute.snapshot.paramMap.get('projectId'))
      .subscribe(res =>{
        if(res['ok']==1){
          this.project = res['project'];
          this.projectName = res['project']['name'];
          this.htmlContent = res['project']['htmlContent'];
          this.jsContent = res['project']['jsContent'];
          this.cssContent = res['project']['cssContent'];
          this.includeBootstrap= res['project']['includeBootstrap'];
          this.includeMaterialize= res['project']['includeMaterialize'];
          this.includeJQuery= res['project']['includeJQuery'];
          this.includeFontawesome= res['project']['includeFontawesome'];
          this.toggleBootstrap(res['project']['includeBootstrap']);
          this.toggleMaterialize(res['project']['includeMaterialize']);
          this.toggleJQuery(res['project']['incluedeJQuery']);
          this.toggleFontawesome(res['project']['includeFontawesome']);
          this.render();
        }
        else{
          alert("algo salió mal aquí: "+res['error']);
        }
    });
  }

  updateHTMLContent(htmlContent){
    this.htmlContent = htmlContent; 
  }
  updateJSContent(jsContent){
    this.jsContent = jsContent;
  }
  updateCSSContent(cssContent){
    this.cssContent = cssContent;
  }

  toggleBootstrap(includeBootstrap){
    this.includeBootstrap = includeBootstrap;
    if(includeBootstrap){
      this.bootstrap = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
      `;
    }
    else{
      this.bootstrap="";
    }
    this.render()
  }
  toggleMaterialize(includeMaterialize){
    this.includeMaterialize = includeMaterialize;
    if(includeMaterialize){
      this.materializeCSS = `
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      `;
      this.materializeJS=`        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      `;
    }
    else{
      this.materializeCSS="";
      this.materializeJS="";
    }
    this.render()
  }
  toggleJQuery(includeJQuery){
    this.includeJQuery = includeJQuery;
    if(includeJQuery){
      this.jquery = `
      <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" ></script>
      `;
    }
    else{
      this.jquery="";
    }
    this.render()
  }
  toggleFontawesome(includeFontawesome){
    this.includeFontawesome = includeFontawesome;
    if(includeFontawesome){
      this.fontawesome = `
        <script src="https://use.fontawesome.com/093c973c68.js"></script>
      `;
    }
    else{
      this.fontawesome="";
    }
    this.render()
  }

  render(){
    this.frameContent = `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta charset="UTF-8">
          ${this.bootstrap}
          ${this.materializeCSS}
          <style>
            ${this.cssContent}
          </style>
        </head>
        <body>
          ${this.htmlContent}
        </body>
        ${this.jquery}
        ${this.materializeJS}
        ${this.fontawesome}
        <script>                   
          ${this.jsContent}
        </script>
      </html>
    `;
  }

  downloadProject(){
    this.download.saveProject(this.project);
  }

  logOut(){
    this.cookieService.delete('visagejsUserToken');
    this.cookieService.delete('userName');
    this.router.navigate(['']);
  }

}
