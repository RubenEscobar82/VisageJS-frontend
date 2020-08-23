import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SnippetEditorModalComponent } from '../snippet-editor-modal/snippet-editor-modal.component';
import { SnippetProppertiesModalComponent } from '../snippet-propperties-modal/snippet-propperties-modal.component';
import { ConnectService } from '../connect-service.service';
import { ProjectPropertiesModalComponent } from '../project-properties-modal/project-properties-modal.component';
import { DownloadService } from '../download.service';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchText: string;
  @Input() results;
  @Input() listDisplay: boolean;
  @Output() return = new EventEmitter();

  constructor( private router: Router, private modalService: NgbModal, private connectService: ConnectService, private download: DownloadService ) {}

  ngOnInit(): void {}

  emitReturn(){
    this.return.emit();
  }

  updateSearchResults(){
    this.connectService.searchContent(this.searchText).subscribe(res => {
      if(res['ok']==1){
        this.results=res['result'];
      }
      else{
        alert(`algo salió mal ${res['error']}`);
      }
    });
  }

  openEditor(content){
    if(content.type==='project'){
      this.router.navigate(['editor', content.folderId, content._id]);
    }
    else{
      let snippetLocationData = {
        folderId: content.folderId,
        snippetId: content._id
      }
      const modalRef = this.modalService.open(SnippetEditorModalComponent, {size: 'lg'});
      modalRef.componentInstance.snippetLocationData = snippetLocationData;
    }
  }

  showProperties(content){
    if(content.type==='project'){
      const modalRef = this.modalService.open(ProjectPropertiesModalComponent);
      modalRef.componentInstance.projectId = content._id;
      modalRef.componentInstance.folderId = content.folderId;
      modalRef.componentInstance.projectUpdated.subscribe(async (folderId)=>{
      await this.updateSearchResults();
    });
    }
    else{
      const modalRef = this.modalService.open(SnippetProppertiesModalComponent);
      modalRef.componentInstance.snippetId = content._id;
      modalRef.componentInstance.folderId = content.folderId;
      modalRef.componentInstance.updateFolderContent.subscribe(async (folderId)=>{
        await this.updateSearchResults();
      });
    }
  }

  downloadSnippet(snippet){
    this.download.saveSnippet(snippet);
  }

  downloadProject(project){
    this.download.saveProject(project);
  }
}
