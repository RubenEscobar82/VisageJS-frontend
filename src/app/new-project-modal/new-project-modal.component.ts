import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectService } from '../connect-service.service';
@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
  styleUrls: ['./new-project-modal.component.css']
})
export class NewProjectModalComponent implements OnInit {
  projectName: string = "Proyecto sin título";
  @Output() projectAdded = new EventEmitter(); 
  constructor( public activeModal: NgbActiveModal, private connectService: ConnectService ) { }

  ngOnInit(): void {
  }
  addProject(){
    if(this.projectName!=""){
      this.activeModal.close('Close click');
      this.projectAdded.emit(this.projectName);
    }
  }

}
