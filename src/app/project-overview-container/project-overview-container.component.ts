import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-overview-container',
  templateUrl: './project-overview-container.component.html',
  styleUrls: ['./project-overview-container.component.css']
})
export class ProjectOverviewContainerComponent implements OnInit {
  @Input() projects: any;
  @Input() pickedProjectsId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
