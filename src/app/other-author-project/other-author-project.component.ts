import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-author-project',
  templateUrl: './other-author-project.component.html',
  styleUrls: ['./other-author-project.component.css']
})
export class OtherAuthorProjectComponent implements OnInit {
  @Input() content:any;
  @Input() pickedProjectsId:number;
  @Output() emitTogglePin = new EventEmitter();
  @Output() emitOpenEditor = new EventEmitter();
  innerContent: string;
  tooltip: string;

  constructor() { }

  ngOnInit(): void {
    if(this.content.alreadyPinned){
      this.tooltip="Remover de proyectos fijados";
    }
    else{
      this.tooltip="Agregar a proyectos fijados";
    }
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
      <body style="overflow:hidden">
        ${this.content.htmlContent}
      </body>    
    </html>
    `;
  }

  togglePin(){
    this.emitTogglePin.emit(this.content);
  }

  openEditor(){
    this.emitOpenEditor.emit(this.content);
  }

}


