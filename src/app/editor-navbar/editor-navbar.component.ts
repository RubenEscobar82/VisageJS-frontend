import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editor-navbar',
  templateUrl: './editor-navbar.component.html',
  styleUrls: ['./editor-navbar.component.css']
})
export class EditorNavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  @Output() download = new EventEmitter();
  @Input() projectName: string;
  username: string = "username";
  collapse = true;

  @Output() guardar = new EventEmitter();

  constructor(private cookieService: CookieService, private router: Router) { }  
  ngOnInit(): void {
    this.username=this.cookieService.get('userName');
  }

  actualizarFrame(){
    this.guardar.emit();
  }

  emitDownload(){
    this.download.emit();
  }

  logOut(){
    this.cookieService.delete('visagejsUserToken');
    this.cookieService.delete('userName');
    this.router.navigate(['']);
  }
}
