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
  public: boolean = true;
  pro: boolean = false;

  constructor( public activeModal: NgbActiveModal, private connectService: ConnectService ) { }

  ngOnInit(): void {
    this.connectService.getAccountData().subscribe(res => {
      if(res['ok']){
        this.pro=res['userData'].pro;
      }
    });
  }
  addProject(){
    if(this.projectName!=""){
      let data = {
        name: this.projectName,
        public: this.public
      }
      this.activeModal.close('Close click');
      this.projectAdded.emit(data);
    }
  }

}
