import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectService } from '../connect-service.service';

@Component({
  selector: 'app-new-folder-modal',
  templateUrl: './new-folder-modal.component.html',
  styleUrls: ['./new-folder-modal.component.css']
})
export class NewFolderModalComponent implements OnInit {
  @Input() name;
  @Output() folderAdded = new EventEmitter(); 
  folderName:string="Carpeta sin título";
  constructor(public activeModal: NgbActiveModal, private connectService: ConnectService) { }

  ngOnInit(): void {
  }
  addFolder(){
    if(this.folderName!=""){
      this.connectService.addFolder(this.folderName).subscribe(res =>{
        if(res['ok']==1){
          this.activeModal.close('Close click')
          this.folderAdded.emit("");
        }
        else{
          alert("Error al crear la carpeta");
        }
      });
    }
  }
  
}
