import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm! : FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.signInForm = this.fb.group({
      'fname':['',Validators.required],
      'lname':['',Validators.required],
      'email':['',Validators.email],
      'telephone':[''],
      'username':['',Validators.required],
      'password':['',Validators.required],

  
    })
    
  }
  SignIn(event:Event){
    event.preventDefault();
    console.log(this.signInForm.value)

  }


  

}
