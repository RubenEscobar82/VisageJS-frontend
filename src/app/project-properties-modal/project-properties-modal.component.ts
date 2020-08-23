import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectService } from '../connect-service.service';
import { FormControl, FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { async } from 'rxjs/internal/scheduler/async';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-properties-modal',
  templateUrl: './project-properties-modal.component.html',
  styleUrls: ['./project-properties-modal.component.css']
})
export class ProjectPropertiesModalComponent implements OnInit {

  @Input() projectId: string;
  @Input() folderId: string; 
  @Output() projectUpdated = new EventEmitter();
  name: string = "";
  createdAt: string = "";
  updatedAt: string = "";
  public: boolean = true;
  author: string = "";
  pro: boolean = false;
  constructor(private router: Router, public activeModal: NgbActiveModal, private connectService: ConnectService, private fb: FormBuilder) { }

  ngOnInit(): void {
   this.getProjectProperties();
  }

  getProjectProperties(){
    this.connectService.getProject(this.folderId, this.projectId).subscribe(res=>{
      if(res['ok']==1){
        console.log(res);
        this.name = res['project'].name;
        this.createdAt = res['project'].createdAt;
        this.updatedAt = res['project'].updatedAt;
        this.author = res['userData'].username;
        this.public = res['project'].public;
        this.pro = res['userData'].pro;
      }
      else{
        alert(`Algo salió mal: ${res['error']}`);
      }
    });
  }
  updateProject(){
    let data = {
      folderId: this.folderId,
      projectId: this.projectId,
      data: {
        name: this.name,
        public: this.public
      }
    };
    this.connectService.updateProjectProperties(data).subscribe(async res => {
      if(res['ok']==1){
        await this.getProjectProperties();
        this.projectUpdated.emit(this.folderId);
        this.activeModal.close('Close click');
      }
      else{
        alert(`Algo salió mal: ${res['error']}`);
      }
    });
  }
  go2Setting(){
    this.router.navigate(['settings', 'plan']);
    this.activeModal.close('Close click');
  }
}
