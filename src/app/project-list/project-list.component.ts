import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() content;
  @Input() displayedContent:string;
  @Input() folderId: string;
  @Output() openProjectEditor = new EventEmitter();
  @Output() openSnippetEditor = new EventEmitter();
  @Output() openSnippetPropertis = new EventEmitter();
  @Output() showProjectProperties = new EventEmitter();
  @Output() restoreContent = new EventEmitter();
  @Output() deleteContent = new EventEmitter();
  @Output() hardDelete = new EventEmitter();
  @Output() downloadProject = new EventEmitter();
  @Output() downloadSnippet = new EventEmitter();
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  emitOpenEditor(projectId, type){
    if(type==="project"){
      this.openProjectEditor.emit(projectId);
    }    
    if(type==="snippet"){
      this.openSnippetEditor.emit(projectId);
    }
  }
  emitShowProperties(item){
    if(item.type==="snippet"){
      this.openSnippetPropertis.emit(item._id);
    }
    if(item.type==='project'){
      this.showProjectProperties.emit(item._id);
    }
  }
  emitDownload(item){
    if(item.type==="project"){
      this.downloadProject.emit(item);
    }
    if(item.type==="snippet"){
      this.downloadSnippet.emit(item);
    }
  }
  emitDelete(contentId){
    this.deleteContent.emit(contentId);
  }
  emitHardDelete(contentId){
    this.hardDelete.emit(contentId);
  }
  emitRestore(contentId){
    this.restoreContent.emit(contentId);
  }
}
