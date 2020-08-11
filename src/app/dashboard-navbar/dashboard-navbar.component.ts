import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  collapse = true;

  constructor( private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(e){
    e.preventDefault();
    this.cookieService.delete('visagejsUserToken');
    this.router.navigate(['']);
  }
}
