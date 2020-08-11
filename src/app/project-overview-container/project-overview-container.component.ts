import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-overview-container',
  templateUrl: './project-overview-container.component.html',
  styleUrls: ['./project-overview-container.component.css']
})
export class ProjectOverviewContainerComponent implements OnInit {
  @Input() content: any;
  @Input() pickedProjectsId: number;
  @Input() folderId: string;
  @Input() displayedContent: string;
  @Output() emitOpenProjectEditor = new EventEmitter();
  @Output() emitOpenSnippetEditor = new EventEmitter();
  @Output() showSnippetProperties = new EventEmitter();
  @Output() emitDeleteContent = new EventEmitter();
  @Output() restore = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitOpenEditor(content){
    if(content.type==="project"){
      this.emitOpenProjectEditor.emit(content._id);
    }
    if(content.type==="snippet"){
      this.emitOpenSnippetEditor.emit(content._id);
    }
  }
  emitShowProperties(content){
    if(content.type==="snippet"){
      this.showSnippetProperties.emit(content._id);
    }
  }
  emitDeletContent(contentId){
    this.emitDeleteContent.emit(contentId);
  }

  emitRestore(contentId){
    this.restore.emit(contentId);
  }
}
