import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results-container',
  templateUrl: './search-results-container.component.html',
  styleUrls: ['./search-results-container.component.css']
})
export class SearchResultsContainerComponent implements OnInit {
  @Input() results;
  @Output() openEditor = new EventEmitter();
  @Output() showProperties = new EventEmitter();
  @Output() downloadProject = new EventEmitter();
  @Output() downloadSnippet = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitOpenEditor(content){
    this.openEditor.emit(content);
  }

  emitShowProperties(content){
    this.showProperties.emit(content);
  }

  download(content){
    if(content.type==='project'){
      this.downloadProject.emit(content);
    }
    if(content.type==='snippet'){
      this.downloadSnippet.emit(content);
    }
  }

}
