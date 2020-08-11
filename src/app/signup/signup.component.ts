import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectService } from '../connect-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class SignupComponent implements OnInit {
  passwordVisible: boolean = false;
  passwordPattern:string="kk";
  tipo = "password";
  step: number = 1;
  creditCard:number = 0;
  selectedPlan:number = 1;
  signupEmail = localStorage.getItem('signupEmail');
  nombreTarjeta: String = "";
  apellidoTarjeta: String = "";
  fechaTarjeta: string = "";
  numeroTarjeta: String = "";
  codigoTarjeta:String = "";

  formPassword = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required])
  });
  constructor( private router: Router, private connectService: ConnectService ) { }

  ngOnInit(): void {
    
  }
  get password(){
    return this.formPassword.get('password');
  }
  get confirmPassword(){
    return this.formPassword.get('confirmPassword');
  }
  get userName(){
    return this.formPassword.get('userName');
  }
  togglePasswordVisible(){
    this.passwordVisible = !this.passwordVisible;
    if(this.passwordVisible){
      this.tipo="text"
    }
    else{
      this.tipo="password"
    }
  }
  changePassword(){
    if (this.confirmPassword.value == this.password.value) {
      this.confirmPassword.setErrors(null);
    } else {
      this.confirmPassword.setErrors({ mismatch: true });
    }
  }
  validate(){
    if(this.step==1){
      if(!this.formPassword.invalid){
        this.step+=1;
      }
      else{
        this.formPassword.get('userName').markAsTouched();
        this.formPassword.get('password').markAsTouched();
        this.formPassword.get('confirmPassword').markAsTouched();
      }
    }
    else{
      if(this.step==2){
        if(this.selectedPlan==1){
          this.enviarUsuario();
        }
        else{
          this.step+=1;
        }
      }
      else{
        this.enviarUsuario();
      }
    }
  }
  enviarUsuario(){
    let pro = false;
        let tarjeta = {};
        if(this.selectedPlan == 2){
          pro = true;
          tarjeta = {
            nombre: this.nombreTarjeta,
            apellido: this.apellidoTarjeta,
            fechaVencimiento: this.fechaTarjeta,
            numero: this.numeroTarjeta,
            codigo: this.codigoTarjeta
          }
        }
        let nuevoUsuario = {
          userName: this.formPassword.get('userName').value,
          email: localStorage.getItem('signupEmail'),
          password: this.formPassword.get('password').value,
          pro: pro,
          tarjeta: tarjeta,
          carpetas: [{
            name: "Elementos restaurados",
            _id: "restored-elements",
            content: new Array()
          }],
          fijados: new Array(),
          papelera: new Array()
        }

        this.connectService.saveUser(nuevoUsuario).subscribe(res => {
          if(res['ok']==1){
            this.router.navigate(['dashboard']);
          }
          else{
            alert("Hubo un error al guardar el usuario");
          }
        });        
  }
  goBack(){
    this.step=this.step-1;
  }
}
