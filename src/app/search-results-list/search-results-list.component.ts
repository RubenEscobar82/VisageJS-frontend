import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.css']
})
export class SearchResultsListComponent implements OnInit {
  @Input() content;
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

  emitDownload(item){
    if(item.type==='project'){
      this.downloadProject.emit(item);
    }
    if(item.type==='snippet'){
      this.downloadSnippet.emit(item);
    }
  }
}
