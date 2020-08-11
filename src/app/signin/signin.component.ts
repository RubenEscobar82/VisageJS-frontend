import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectService } from '../connect-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor( private connectService : ConnectService, private router: Router) { }

  ngOnInit(): void {
  }

  validate(){
    this.signinForm.markAllAsTouched();
    if(this.signinForm.valid){
      let credentials = {
        email: this.signinForm.get('email').value,
        password: this.signinForm.get('password').value
      };
      this.connectService.signin(credentials)
      .subscribe(res =>{
        console.log(res);
        if(res['ok']==0){
          if(res['error']==='emailError'){
            this.signinForm.get('email').setErrors({emailError: true});
          }
          if(res['error']==='passwordError'){
            this.signinForm.get('password').setErrors({passwordError: true});
          }
        }
        else{
          if(res['ok']==1){
            this.router.navigate(['dashboard']);
          }
        }
      });
    }
  }

  get email(){
    return this.signinForm.get('email');
  }
  get password(){
    return this.signinForm.get('password');
  }

}
