import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectService } from '../connect-service.service';

@Component({
  selector: 'app-rename-folder-modal',
  templateUrl: './rename-folder-modal.component.html',
  styleUrls: ['./rename-folder-modal.component.css']
})
export class RenameFolderModalComponent implements OnInit {
  @Input() folderName: String;
  @Input() folderId: String;
  @Output() folderRenamed = new EventEmitter();
  constructor(public activeModal: NgbActiveModal, private connectService: ConnectService) { }

  ngOnInit(): void {
  }
  renameFolder(){
    if(this.folderName!=""){
      this.connectService.updateFolder( this.folderId, this.folderName).subscribe(res =>{
        if(res['ok']==1){
          this.activeModal.close('Close click')
          this.folderRenamed.emit("");
        }
        else{
          alert("Error al crear la carpeta");
        }
      })
    }
  }

}
