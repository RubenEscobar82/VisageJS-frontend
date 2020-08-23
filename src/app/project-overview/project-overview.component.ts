import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {
  @Input() content:any;
  @Input() pickedProjectsId:number;
  @Input() folderId: string;
  @Input() displayedContent: string;
  @Output() openEditor = new EventEmitter();
  @Output() showProperties = new EventEmitter();
  @Output() deleteContent = new EventEmitter();
  @Output() restore = new EventEmitter();
  @Output() emitHardDelete = new EventEmitter();
  @Output() download = new EventEmitter();
  innerContent: string;
  showActions:boolean = false;
  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.content.author = this.cookieService.get('userName');
    let bootstrap = "";
    let materialize = "";    
    let fontawesome = "";
    
    if(this.content.includeBootstrap){
      bootstrap = `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">`;
    }
    if(this.content.includeMaterialize){
      materialize = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`;
    }
    if(this.content.includeFontawesome){
      fontawesome = `<script src="https://use.fontawesome.com/093c973c68.js"></script>`;
    }
    this.innerContent = `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        ${bootstrap}
        ${materialize}
        <style>
          ${this.content.cssContent}
        </style>
      </head>
      <body>
        ${this.content.htmlContent}
      </body>    
    </html>
    `;
  }
  emitOpenEditor(){
    this.openEditor.emit(this.content);
  }
  emitShowProperties(){
    this.showProperties.emit(this.content);
  }
  emitDownload(content){
    this.download.emit(content);    
  }

  eliminar(contentId){
    if(!(this.displayedContent==='deleted')){
      this.deleteContent.emit(contentId);
    }
    else{
      this.emitHardDelete.emit(contentId);
    }
  }
  toggleActions(e){
    e.stopPropagation();
    this.showActions=!this.showActions;
  }
  
  emitRestore(contentId){
    this.restore.emit(contentId);
  }
}
