import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect-service.service';
import { DownloadService } from '../download.service';

@Component({
  selector: 'app-other-author-projects-container',
  templateUrl: './other-author-projects-container.component.html',
  styleUrls: ['./other-author-projects-container.component.css']
})
export class OtherAuthorProjectsContainerComponent implements OnInit {
  @Input() listDisplay: boolean;
  pinnedProjects = []
  constructor( private connectService: ConnectService, private router: Router, private download: DownloadService) { }

  ngOnInit(): void {
    this.getPinnedProjects();
  }

  getPinnedProjects(){
    this.connectService.getPins().subscribe(res => {
      if(res['ok']==1){
        this.pinnedProjects = res['pinnedProjects'];
        console.log(this.pinnedProjects);
      }
      else{
        alert(`Algo salió mal: ${res['error']}`);
      }
    });
  }

  togglePin(project){
    this.connectService.removePin(project._id).subscribe(res => {
      if(res['ok']==1){
        this.getPinnedProjects();
      }
      else{
        alert(`Algo salió mal: ${res['error']}`);
      }
    });
  }

  openEditor(project){
    this.router.navigate(['xeditor',project.folderId, project._id]);
  }

  emitDownload(project){
    this.download.saveProject(project);
  }
}
