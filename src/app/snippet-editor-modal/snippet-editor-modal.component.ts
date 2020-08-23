import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectService } from '../connect-service.service';

@Component({
  selector: 'app-snippet-editor-modal',
  templateUrl: './snippet-editor-modal.component.html',
  styleUrls: ['./snippet-editor-modal.component.css']
})
export class SnippetEditorModalComponent implements OnInit {
  @Input() snippetLocationData:any;
  content:string="";
  snippetName: string;
  language: string = "markdown";
  constructor(public activeModal: NgbActiveModal, private connectService: ConnectService) { }

  ngOnInit(): void {
    this.setSnippetEditor();
  }
  setSnippetEditor(){
    this.connectService.getSnippet(this.snippetLocationData.folderId, this.snippetLocationData.snippetId).subscribe(res=>{
      if(res['ok']==1){
        this.content=res['snippetData']['content'];
        this.snippetName=res['snippetData']['name'];
        this.language=res['snippetData']['language']
      }
      else{
        alert(`algo salió mal: ${res['error']}`);
        console.log(res['error']);
      }
    });
  }
  updateSnippet(){
    let snippetData={
      folderId: this.snippetLocationData.folderId,
      snippetId: this.snippetLocationData.snippetId,
      content: this.content,
      language: this.language,
      name: this.snippetName
    };
    this.connectService.updateSnippet(snippetData).subscribe(async res=>{
      if(res['ok']==1){
        await this.setSnippetEditor();
      }
      else{
        alert("algo salió mal: "+res['error']);
      }
    });
  }
}
