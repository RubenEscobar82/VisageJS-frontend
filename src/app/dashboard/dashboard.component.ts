import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConnectService } from '../connect-service.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewFolderModalComponent } from '../new-folder-modal/new-folder-modal.component';
import { RenameFolderModalComponent } from '../rename-folder-modal/rename-folder-modal.component';
import { SnippetEditorModalComponent } from '../snippet-editor-modal/snippet-editor-modal.component';
import { NewSnippetModalComponent } from '../new-snippet-modal/new-snippet-modal.component'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  listDisplay:boolean = false;
  view:number = 0;
  displayedContent: string = "folders";
  searchText: string = "";
  results = [];
  constructor( private connectService: ConnectService, private router: Router) { }

  ngOnInit(): void {
   
  }

  switchDisplay(){
    this.listDisplay = !this.listDisplay;
  }

  search(){
    this.connectService.searchContent(this.searchText).subscribe(res => {
      if(res['ok']==1){
        this.results=res['result'];
        console.log(res['result']);
      }
      else{
        alert(`algo salió mal ${res['error']}`);
      }
    });
  }
}
