import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConnectService } from '../connect-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-config',
  templateUrl: './account-config.component.html',
  styleUrls: ['./account-config.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountConfigComponent implements OnInit {
  showMenu: boolean = false;
  editGeneral: boolean = false;
  editSeguridad: boolean = false;
  editPlan: boolean = false;
  editTarjeta: boolean = false;
  index: string = "general";

  userData = {
    username: "",
    email: "",
    pro: false,
    tarjeta: {}
  }

  formGeneral = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });

  formPassword = new FormGroup({
    currentPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmNewPassword: new FormControl('', [Validators.required])
  });

  formTarjeta = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    fechaVencimiento: new FormControl('', [Validators.required]),
    codigo: new FormControl('', [Validators.required])
  });

  constructor( private activatedRoute: ActivatedRoute, private connectService: ConnectService, private cookieService: CookieService, private router: Router ) { }

  ngOnInit(): void {
    this.resetConfig();
    this.index=this.activatedRoute.snapshot.paramMap.get('section');
  }

  resetConfig(){
    this.connectService.getAccountData().subscribe(res => {
      if(res['ok']==1){
        this.formGeneral.setValue(
          {
            username: res['userData'].username,
            email: res['userData'].email
          }          
        );
        this.userData.pro = res['userData'].pro;
        this.formTarjeta.setValue(
          {
            nombre: res['userData'].tarjeta.nombre,
            apellido: res['userData'].tarjeta.apellido,
            numero: res['userData'].tarjeta.numero,
            fechaVencimiento: res['userData'].tarjeta.fechaVencimiento,
            codigo: res['userData'].tarjeta.codigo
          }    
        );
        this.formPassword.setValue({
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: ""
        });
        this.formPassword.markAsUntouched();
        this.formPassword.markAsPristine();
      }
      else{
        alert(`Algo salió mal: ${res['error']}`);
      }
    });
  }

  updateGeneralConfig(){
    if(this.formGeneral.valid){
      let data = {
        username: this.formGeneral.get('username').value,
        email: this.formGeneral.get('email').value
      }
      this.connectService.updateGeneralConfig(data).subscribe(res => {
        if(res['ok']==1){
          this.editGeneral=false;
          this.resetConfig();
        }
        else{
          alert(`Algo salió mal: ${res['error']}`);
        }
      });
    }
  }
  updatePassword(){
    this.formPassword.markAllAsTouched();
    if (this.confirmNewPassword.value == this.newPassword.value) {
      this.confirmNewPassword.setErrors(null);
    } else {
      this.confirmNewPassword.setErrors({ mismatch: true });
    }
    if(this.formPassword.valid){
      let data = {
        currentPassword: this.formPassword.get('currentPassword').value,
        newPassword: this.formPassword.get('newPassword').value
      }
      this.connectService.updateSecurityConfig(data).subscribe(res => {
        if(res['ok']==0){
          if(res['error']==='passwordError'){
            this.currentPassword.setErrors({mismatch: true});
          }
        }
        else{
          if(res['ok']==1){
            this.resetConfig();
          }
        }
      });
    }
  }
  updatePlan(){    
    this.connectService.updatePlanConfig(this.userData.pro).subscribe(res => {
      if(res['ok']==1){
        this.editPlan=false;
        this.resetConfig();
      }
      else{
        alert(`Algo salió mal: ${res['error']}`);
      }
    });
  }
  updateTarjeta(){
    if(this.formTarjeta.valid){
      let data = {
        nombre: this.formTarjeta.get('nombre').value,
        apellido: this.formTarjeta.get('apellido').value,
        numero: this.formTarjeta.get('numero').value,
        fechaVencimiento: this.formTarjeta.get('fechaVencimiento').value,
        codigo: this.formTarjeta.get('codigo').value
      }
      this.connectService.updateCardConfig(data).subscribe(res => {
        if(res['ok']==1){
          this.editTarjeta=false;
          this.resetConfig();
        }
        else{
          alert(`Algo salió mal: ${res['error']}`);
        }
      });
    }
  }
  
  changePlan(value){
    if(this.editPlan){
      this.userData.pro = value;
    }
  }

  eliminarCuenta(){
    this.connectService.deleteUser().subscribe(res => {
      if(res['ok']==1){
        this.cookieService.delete('visagejsUserToken');
        this.router.navigate(['']);
      } 
      else{
        alert(`Algo salió mal: ${res['error']}`);
      }
    });
  }

  get username(){
    return this.formGeneral.get('username');
  }
  get email(){
    return this.formGeneral.get('email');
  }
  get currentPassword(){
    return this.formPassword.get('currentPassword');
  }
  get newPassword(){
    return this.formPassword.get('newPassword');
  }
  get confirmNewPassword(){
    return this.formPassword.get('confirmNewPassword');
  }
  get nombre(){
    return this.formTarjeta.get('nombre');
  }
  get apellido(){
    return this.formTarjeta.get('apellido');
  }
  get numero(){
    return this.formTarjeta.get('numero');
  }
  get fechaVencimiento(){
    return this.formTarjeta.get('fechaVencimiento');
  }
  get codigo(){
    return this.formTarjeta.get('codigo');
  }
}
