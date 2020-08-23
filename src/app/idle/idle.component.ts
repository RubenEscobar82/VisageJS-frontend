import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewProjectModalComponent } from '../new-project-modal/new-project-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewFolderModalComponent } from '../new-folder-modal/new-folder-modal.component';
import { ProjectsExcededModalComponent } from '../projects-exceded-modal/projects-exceded-modal.component';
import { ConnectService } from '../connect-service.service';
import { DownloadService } from '../download.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-idle',
  templateUrl: './idle.component.html',
  styleUrls: ['./idle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IdleComponent implements OnInit {
  projectName: string = "Proyecto sin título"
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
  alreadySaved: boolean = false;
  projectId: string = "";
  constructor( private activatedRoute: ActivatedRoute, private modalService: NgbModal, private connectService: ConnectService, private router: Router, private location: Location, private download: DownloadService ) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.paramMap.get('projectId')!='new'){
      this.projectId = this.activatedRoute.snapshot.paramMap.get('projectId');
      this.connectService.getProject(this.activatedRoute.snapshot.paramMap.get('folderId'),this.activatedRoute.snapshot.paramMap.get('projectId'))
      .subscribe(res =>{
        if(res['ok']==1){
          this.projectName=res['project']['name']
          this.project = res['project'];
          this.htmlContent = res['project']['htmlContent'];
          this.jsContent = res['project']['jsContent'];
          this.cssContent = res['project']['cssContent'];
          this.includeBootstrap= res['project']['includeBootstrap'];
          this.includeMaterialize= res['project']['includeMaterialize'];
          this.includeJQuery= res['project']['includeJQuery'];
          this.includeFontawesome= res['project']['includeFontawesome'];
          this.toggleBootstrap(res['project']['includeBootstrap']);
          this.toggleMaterialize(res['project']['includeMaterialize']);
          this.toggleJQuery(res['project']['includeJQuery']);
          this.toggleFontawesome(res['project']['includeFontawesome']);
          this.render();
        }
        else{
          alert("algo salió mal aquí: "+res['error']);
        }
      });
    }
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
  setFrameContent(){    
    if(this.activatedRoute.snapshot.paramMap.get('projectId')=="new" && this.alreadySaved==false){
      const modalRef = this.modalService.open(NewProjectModalComponent);
      modalRef.componentInstance.projectAdded.subscribe((data)=>{
        let content2Save = {
          name: data.name,
          htmlContent: this.htmlContent,
          jsContent: this.jsContent,
          cssContent: this.cssContent,
          includeBootstrap: this.includeBootstrap,
          includeMaterialize: this.includeMaterialize,
          includeJQuery: this.includeJQuery,
          includeFontawesome: this.includeFontawesome,
          public: data.public
        };
        this.connectService.saveProject(content2Save, this.activatedRoute.snapshot.paramMap.get('folderId')).subscribe(res =>{
          if(res['ok']==1){
            this.projectName = data.name;
            this.location.replaceState(`editor/${this.activatedRoute.snapshot.paramMap.get('folderId')}/${res['projectId']}`);
            this.alreadySaved = true;
            this.projectId = res['projectId'];
          }
          else{
            if(res['error']==='projectsCount'){
              const modalRef = this.modalService.open(ProjectsExcededModalComponent);
              modalRef.componentInstance.pro = res['pro'];
              modalRef.componentInstance.type = 'proyectos';
            }
          }
        });
      });
    }
    else{
        let content2Save = {
          htmlContent: this.htmlContent,
          jsContent: this.jsContent,
          cssContent: this.cssContent,
          includeBootstrap: this.includeBootstrap,
          includeMaterialize: this.includeMaterialize,
          includeJQuery: this.includeJQuery,
          includeFontawesome: this.includeFontawesome,
          public: false
        };
        this.connectService.updateProject(content2Save, this.activatedRoute.snapshot.paramMap.get('folderId'), this.projectId).subscribe(res =>{
          if(res['ok']==1){
            //this.router.navigate(['editor',this.activatedRoute.snapshot.paramMap.get('folderId'),res['projectId']]);
            //alert("Actualizado");
          }
          else{
            alert("Algo salió mal: "+res['error']);
            console.log(res['error']);
          }
        });
    }
    this.render();    
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
    this.setFrameContent()
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
    this.setFrameContent()
  }
  toggleJQuery(includeJQuery){
    this.includeJQuery = includeJQuery;
    if(includeJQuery){
      this.jquery = `
      <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
      `;
    }
    else{
      this.jquery="";
    }
    this.setFrameContent()
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
    this.setFrameContent()
  }

  downloadProject(){
    this.download.saveProject(this.project);
  }
}
