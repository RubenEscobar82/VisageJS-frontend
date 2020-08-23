import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectService } from '../connect-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-exceded-modal',
  templateUrl: './projects-exceded-modal.component.html',
  styleUrls: ['./projects-exceded-modal.component.css']
})
export class ProjectsExcededModalComponent implements OnInit {
  @Input() pro: string;
  @Input() type: string;
  constructor(public activeModal: NgbActiveModal, private connectService: ConnectService, private router: Router) { }

  ngOnInit(): void {
  }
  go2Settings(){
    this.router.navigate(['settings', 'plan']);
    this.activeModal.close('Close click')
  }

}
