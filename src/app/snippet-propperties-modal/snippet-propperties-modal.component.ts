import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectService } from '../connect-service.service';
import { FormControl, FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-snippet-propperties-modal',
  templateUrl: './snippet-propperties-modal.component.html',
  styleUrls: ['./snippet-propperties-modal.component.css']
})
export class SnippetProppertiesModalComponent implements OnInit {
  @Input() folderId: string;
  @Input() snippetId: string;  
  @Output() updateFolderContent = new EventEmitter();

  name:string;
  SelectedLanguage:string="otros";
  languages = ['php','ruby','python','sass','otros'];
  languagesForm: FormGroup;
  createdAt: string;
  updatedAt:string;
  content:string="";
  author:string;
  snippetData: any;


  constructor(public activeModal: NgbActiveModal, private connectService: ConnectService, private fb: FormBuilder) { }

  ngOnInit(): void {    
    this.languagesForm=this.fb.group({
      languageControl: [this.SelectedLanguage]
    });
    this.connectService.getSnippet(this.folderId, this.snippetId).subscribe( res =>{
      if(res['ok']==1){
        this.name = res['snippetData']['name'];
        this.createdAt = res['snippetData']['createdAt'];
        this.updatedAt = res['snippetData']['updatedAt'];
        this.author = res['snippetData']['author'];
        this.SelectedLanguage = res['snippetData']['language'];
        this.content = res['snippetData']['content'];
        this.languagesForm=this.fb.group({
          languageControl: [this.SelectedLanguage]
        });
      }
      else{
        alert(`algo salió mal: ${res['error']}`);
      }
    });    
  }

  updateSnippet(){
    if(this.name!=""){
      let snippetData = {
        folderId: this.folderId,
        snippetId: this.snippetId,
        name: this.name,
        language: this.languagesForm.get('languageControl').value,
        content: this.content
      }
      this.connectService.updateSnippet(snippetData).subscribe(res => {
        if(res['ok']==1){
          this.updateFolderContent.emit(this.folderId);
          this.activeModal.close('Close click');
        }
        else{
          alert("algo salió mal");
        }
      });
    }
  }
}
