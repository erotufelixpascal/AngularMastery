import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder,private router:Router ){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.email],

    })
    
  }
 

  login(event:Event){
    event.preventDefault();
    console.log(this.loginForm.value);

  }
  onSubmit(event:Event){
    if(this.loginForm.valid){
      this.router.navigate(["/signIn"]);
    }

  }

}
