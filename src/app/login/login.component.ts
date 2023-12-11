import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  'username':'';
  'password':'';

  // constructor(private, ){}

  login(event:Event){
    console.log('this.login.value');

  }

}
