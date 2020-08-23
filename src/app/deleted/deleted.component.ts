import { Component, OnInit, Input } from '@angular/core';
import { ConnectService } from '../connect-service.service';
import { ProjectsExcededModalComponent } from '../projects-exceded-modal/projects-exceded-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {
  @Input() listDisplay: string;
  deletedItems = new Array;

  constructor(private connectService: ConnectService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.updateDeletedItemList();
  }

  updateDeletedItemList(){
    this.connectService.getDeletedItems().subscribe(res=>{
      if(res['ok']==1){
        this.deletedItems = res['deletedItems'];
      }
      else{
        alert(`algo salió mal: ${res['error']}`);
      }
    });
  }

  restore(contentId){
    this.connectService.retoreItem(contentId).subscribe(res =>{
      if(res['ok']==1){
        this.updateDeletedItemList();
      }
      else{
        if((res['error']==='projectsCount') || (res['error']==='snippetsCount')){
          let excededContent = "proyectos";
          if(res['error']==='snippetsCount'){
            excededContent = "snippets";
          }
          const modalRef = this.modalService.open(ProjectsExcededModalComponent);
          modalRef.componentInstance.pro = res['pro'];
          modalRef.componentInstance.type = excededContent;
        }
      }
    });
  }

  hardDelete(contentId){
    this.connectService.hardDelete(contentId).subscribe(res =>{
      if(res['ok']==1){
        this.updateDeletedItemList();
      }
      else{
        alert(`algo salió mal: ${res['error']}`);
      }
    });
  }
}
