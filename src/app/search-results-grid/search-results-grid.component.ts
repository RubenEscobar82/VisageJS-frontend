import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results-grid',
  templateUrl: './search-results-grid.component.html',
  styleUrls: ['./search-results-grid.component.css']
})
export class SearchResultsGridComponent implements OnInit {
  @Input() content;
  @Output() openEditor = new EventEmitter();
  @Output() showProperties = new EventEmitter();
  @Output() download = new EventEmitter();
  showActions: boolean = false;
  innerContent: string = "";

  constructor() { }

  ngOnInit(): void {
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

  emitDownload(){
    this.download.emit(this.content);
  }

  emitShowProperties(){
    this.showProperties.emit(this.content);
  }

  toggleActions(e){
    e.stopPropagation();
    this.showActions=!this.showActions;
  }
}
