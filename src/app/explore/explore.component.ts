import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConnectService } from '../connect-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreComponent implements OnInit {
  projects = [];
  pinnedProjects = [];
  searchResults = [];
  searchText: string = "";
  constructor( private connectService: ConnectService, private router: Router) { }

  ngOnInit(): void {
    this.explore();
  }

  explore(){
    this.connectService.exploreProjects().subscribe(res => {
      if(res['ok']==1){
        let projects = res['projects'];
        this.pinnedProjects = res['pinnedProjects'];
        for(let i=0; i<projects.length; i++){
          let pinnedProject = this.pinnedProjects.filter(function(entry){
            return entry._id===projects[i]['_id'];
          });
          if(pinnedProject.length==0){
            projects[i].alreadyPinned = false;
          }
          else{
            projects[i].alreadyPinned = true;
          }
        }
        this.projects = projects;
      }
      else{
        alert(`Algo salió mal: ${res['error']}`);
      }
    });
  }

  togglePin(project){
    if (!(project.alreadyPinned==true)){
      let data = {
        project: project
      }
      this.connectService.addPin(data).subscribe(res=>{
        if(res['ok']==1){
          this.explore();
        }
        else{
          alert(`Algo salió mal: ${res['error']}`);
        }
      });
    }
    else{
      this.connectService.removePin(project._id).subscribe(res => {
        if(res['ok']==1){
          this.explore();
        }
        else{
          alert(`Algo salió mal: ${res['error']}`);
        }
      });
    }
  }

  search(){
    this.connectService.searchPublicProjects(this.searchText).subscribe(res => {
      if(res['ok']==1){
        let searchResults = res['searchResults'];
        this.pinnedProjects = res['pinnedProjects'];
        for(let i=0; i<searchResults.length; i++){
          let pinnedProject = this.pinnedProjects.filter(function(entry){
            return entry._id===searchResults[i]['_id'];
          });
          if(pinnedProject.length==0){
            searchResults[i].alreadyPinned = false;
          }
          else{
            searchResults[i].alreadyPinned = true;
          }
        }
        this.searchResults = searchResults;
      }
      else{
        alert(`Algo salió mal: ${res['error']}`);
      }
    });
  }

  openEditor(project){
    this.router.navigate(['xeditor',project.folderId, project._id]);
  }

}
