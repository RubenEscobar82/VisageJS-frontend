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
  }
}
