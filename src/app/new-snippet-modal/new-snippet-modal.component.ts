import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectService } from '../connect-service.service';
import { utf8Encode } from '@angular/compiler/src/util';

@Component({
  selector: 'app-new-snippet-modal',
  templateUrl: './new-snippet-modal.component.html',
  styleUrls: ['./new-snippet-modal.component.css']
})
export class NewSnippetModalComponent implements OnInit {
  @Output() snippetAdded = new EventEmitter();
  @Output() exceded = new EventEmitter();
  @Input() folderId : string;
  snippetName: string = "Snippet sin título";
  language: string = "php";
  constructor(public activeModal: NgbActiveModal, private connectService: ConnectService) { }

  setLanguage(language){
    this.language = language;
  }

  ngOnInit(): void {
  }

  addSnippet(){
    this.connectService.saveSnippet(this.snippetName, this.language, this.folderId).subscribe(res => {
      if(res['ok']==1){
        let snippetData = {
          folderId: this.folderId,
          snippetId: res['snippetId']
        }
        this.activeModal.close('Close click');
        console.log(snippetData);
        this.snippetAdded.emit(snippetData);
      }
      else{
        if(res['error']==='snippetsCount'){
          this.exceded.emit(res);
          this.activeModal.close('Close click');
        }
      }
    });
  }

}
