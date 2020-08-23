import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  @Input() selectedSite: string;
  username: string = "username";
  collapse = true;

  constructor( private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.username=this.cookieService.get('userName');
  }

  logOut(e){
    e.preventDefault();
    this.cookieService.delete('visagejsUserToken');
    this.cookieService.delete('userName');
    this.router.navigate(['']);
  }
  go2Settings(){
    this.router.navigate(['settings', 'general']);
  }
  go2Explore(){
    this.router.navigate(['explore']);
  }
}
