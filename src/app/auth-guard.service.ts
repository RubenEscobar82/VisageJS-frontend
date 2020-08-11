import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _router: Router, private cookieService: CookieService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ){
    if((next.url.toString()==='') || (next.url.toString()==='signup') || (next.url.toString()==='signin')){
      if(this.cookieService.get('visagejsUserToken')){
        this._router.navigate(['dashboard']);
        return false;
      }
      else{
        return true;
      }
    }
    else{
      if(this.cookieService.get('visagejsUserToken')){
        return true;
      }
      else{
        this._router.navigate(['']);
        return false;
      }
    }
  }
}
