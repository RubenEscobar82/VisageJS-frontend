import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class SignupGuardService implements CanActivate{

  constructor(private _router: Router, private cookieService: CookieService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ){
    if(localStorage.getItem('signupEmail')){
      if(this.cookieService.get('visagejsUserToken')){
        this._router.navigate(['dashboard']);
        return false;
      }
      return true;
    }
    this._router.navigate(['']);
    return false;
  }
}
