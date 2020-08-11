import { Component, OnInit, Input } from '@angular/core';
import { ConnectService } from '../connect-service.service';
@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {
  @Input() listDisplay: string;
  deletedItems = new Array;

  constructor(private connectService: ConnectService) { }

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
        alert(`algo salió mal: ${res['error']}`);
      }
    });
  }
}
