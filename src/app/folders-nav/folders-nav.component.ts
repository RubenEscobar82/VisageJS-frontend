import { Component, OnInit, Input, Output } from '@angular/core';
import { ConnectService } from '../connect-service.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewFolderModalComponent } from '../new-folder-modal/new-folder-modal.component';
import { NewSnippetModalComponent } from '../new-snippet-modal/new-snippet-modal.component'
import { RenameFolderModalComponent } from '../rename-folder-modal/rename-folder-modal.component';
import { SnippetEditorModalComponent } from '../snippet-editor-modal/snippet-editor-modal.component';
import { SnippetProppertiesModalComponent } from '../snippet-propperties-modal/snippet-propperties-modal.component';
import { Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-folders-nav',
  templateUrl: './folders-nav.component.html',
  styleUrls: ['./folders-nav.component.css']
})
export class FoldersNavComponent implements OnInit {
  
  @Input() listDisplay: boolean;
  folders: any = [];
  insideFolder: boolean = false;
  openedFolder: any = [];
  displayedContent:string = "folders";

  

  constructor( private connectService:ConnectService, private modalService: NgbModal, private router: Router ) { }

  ngOnInit(): void {
    this.updateFoldersList('');
  }

  async updateFoldersList( openedFolderId ){
    await this.connectService.getCarpetas().subscribe( res =>{
      if(res['ok']==1){
        this.folders = res['carpetas'];
        if(!(openedFolderId==='')){
          this.openFolder(openedFolderId);
        }
      }
      else{
        alert("Se produjo un error al intentar obtener la data del usuario");
      }
    });
  };

  addFolder() {
    const modalRef = this.modalService.open(NewFolderModalComponent);
    modalRef.componentInstance.folderAdded.subscribe(async ($e)=>{
      await this.updateFoldersList('');
    });
  }

  renameFolder(folder){
    const modalRef = this.modalService.open(RenameFolderModalComponent);
    modalRef.componentInstance.folderName = folder.name;
    modalRef.componentInstance.folderId = folder._id;
    modalRef.componentInstance.folderRenamed.subscribe(($e)=>{
      this.updateFoldersList('');
    });
    return false;
  }

  deleteFolder(folderId){
    this.connectService.deleteFolder(folderId).subscribe(res => {
      if(res['ok']==1){
        this.updateFoldersList('');
      }
      else{
        alert("Algo salió mal");
        alert(res['error']);
      }
    });
  }

  openFolder(folderId){
    this.insideFolder=true;
    this.openedFolder=this.folders.filter(function(entry){
      return entry._id===folderId;
    })[0];
  }
  alertar(){
    alert("cambiarNombre");
  };
  
  openProjectEditor(projectId){
    this.router.navigate(['editor',this.openedFolder['_id'], projectId]);
  }

  createSnippet(){
    const modalRef = this.modalService.open(NewSnippetModalComponent);
    modalRef.componentInstance.folderId = this.openedFolder._id;
    modalRef.componentInstance.snippetAdded.subscribe(async (snippetData)=>{
      await this.openSnippetEditor(snippetData);
      this.updateFoldersList(this.openedFolder['_id']);
    });
  }

  openSnippetEditor(snippetLocationData){
    const modalRef = this.modalService.open(SnippetEditorModalComponent, {size: 'lg'});
    modalRef.componentInstance.snippetLocationData = snippetLocationData;
  }

  openCreatedSnippetEditor(snippetId){
    console.log(snippetId);
    let snippetLocationData = {
      folderId: this.openedFolder['_id'],
      snippetId: snippetId
    }
    const modalRef = this.modalService.open(SnippetEditorModalComponent, {size: 'lg'});
    modalRef.componentInstance.snippetLocationData = snippetLocationData;
  }

  showSnippetProperties(snippetId){
    const modalRef = this.modalService.open(SnippetProppertiesModalComponent);
    modalRef.componentInstance.snippetId = snippetId;
    modalRef.componentInstance.folderId = this.openedFolder['_id'];
    modalRef.componentInstance.updateFolderContent.subscribe((folderId)=>{
      this.openFolder(folderId);
    });
  }

  deleteContent(contentId){
    let contentToDelete = {
      folderId: this.openedFolder['_id'],
      contentId: contentId 
    };
    this.connectService.deleteContent(this.openedFolder['_id'], contentId).subscribe(async res=>{
      if(res['ok']==1){
        this.updateFoldersList(this.openedFolder['_id']);
      }
      else{
        alert(`algo salió mal: ${res['error']}`);
      }
    });
  }
}
