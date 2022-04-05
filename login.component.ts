import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  isEmailinvalid: boolean = false;
  isPasswordLowercase: boolean = false;
  isPasswordUppercase: boolean = false;
  isPasswordSpecialcase: boolean = false;
  isPasswordNumbercase: boolean = false;
  isPasswordLengthcase: boolean = false;

  isInvalidUser: boolean = false;
  isSuccesuser: boolean = false;

  isSubmitted: boolean = false;

  isEventriger:boolean=false;
  isHide:boolean=false;
  isShow:boolean=false;

  isMode="password";






  verifieduser =
    {
      email: 'guna@gmail.com',
      password: 'gun@dM!n143'

    }








  constructor(private fb: FormBuilder, private route: Router) {


    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]
    })
    console.log(this.loginform)
  }
  ngOnInit() {

  }
  //////////////////////////////////////////////////////////////
  email(event: any) {
 if(event.target.value !=""){
   this.isEventriger=true;

 
    if ((/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(event.target.value))) {
      this.isEmailinvalid = false;

    }
    else {
      this.isEmailinvalid = true;
    }
    
  }
  else{
    this.isSubmitted=false;
    this.isEventriger=false;
    this.isInvalidUser=false;
  }


  }

  pass(event: any) {
    
    if (event.target.value != "") {
     this.isEventriger=true;




      if ((/^[a-z]/.test(event.target.value))) {
        this.isPasswordLowercase = false;
        this.isPasswordNumbercase = true;


      }
      else {
        this.isPasswordLowercase = true;
       

      }
      if (/[A-Z]/.test(event.target.value)) {
        this.isPasswordUppercase = false;

      } else {
        this.isPasswordUppercase = true;

      }

      if (/[!@#$%^&*()<>?]/.test(event.target.value)) {

        this.isPasswordSpecialcase = false;

      } else {

        this.isPasswordSpecialcase = true;

      }
      if (/[0-9]/.test(event.target.value)) {

        this.isPasswordNumbercase = false;

      } else {

        this.isPasswordNumbercase = true;

      }
      if (event.target.value.length >= 7) {
        this.isPasswordLengthcase = false;
      }
      else {
        this.isPasswordLengthcase = true;
      }

    }
    else{
      this.isSubmitted=false;
      this.isInvalidUser=false;
      this.isEventriger=false;
    }
  }
  save() {

    this.isSubmitted = true;
    if (this.loginform.valid) {
      this.isSubmitted = false;
    }

    if (this.loginform.controls['email'].value == this.verifieduser['email'] && this.loginform.controls['password'].value == this.verifieduser['password']) {
      this.isSubmitted = true;
      this.isSuccesuser = true;
      this.isInvalidUser = false;
      this.route.navigate(['user']);
    }
    else {
      this.isInvalidUser = true;
      this.isSuccesuser = false;

    }



  }
  view(){
    debugger
    this.isShow=!this.isShow
    if(this.isShow){
      this.isMode="string"

    }
    else{
      this.isMode="password"

    }
    

  }
  

}



