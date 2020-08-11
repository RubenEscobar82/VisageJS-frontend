import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectService } from '../connect-service.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  formEmail = new FormGroup({
    signupEmail: new FormControl('', [Validators.required])
  });
  constructor(private _router: Router, private connectService: ConnectService) { }

  ngOnInit(): void {
  }
  get signupEmail(){
    return this.formEmail.get('signupEmail');
  }
  validate(){
    this.formEmail.get('signupEmail').markAsTouched();
    if(this.formEmail.valid){
      this.connectService.verifyEmail({email: this.formEmail.get('signupEmail').value})
      .subscribe(res => {
        if(res['ok']==1){
          localStorage.setItem('signupEmail',this.formEmail.get('signupEmail').value);
          this._router.navigate(['signup']);
        }
        else{
          this.formEmail.get('signupEmail').setErrors({alreadyExists: true});
        }
      });
    }
  }
}
