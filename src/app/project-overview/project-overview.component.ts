import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {
  @Input() project:any;
  @Input() pickedProjectsId:number;
  showActions:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  alertar(){
    alert("ir al editor!");
  }
  descargar(e){
    //
    e.preventDefault();
    alert("Descargar Archivo!");
    e.stopPropagation();
    
  }
  toggleActions(e){
    e.stopPropagation();
    this.showActions=!this.showActions;
  }
}
