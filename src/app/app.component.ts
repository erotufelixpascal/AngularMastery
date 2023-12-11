import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
//import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { WeekendReportComponent } from './weekend-report/weekend-report.component';
import { CallRecordComponent } from './call-record/call-record.component';
import { LoginComponent } from './login/login.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterLink,RouterOutlet,RouterLinkActive  } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  //imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  //standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WisdomCourses';

  constructor(private dialog : MatDialog){

  }
  openDialog() {  
    this.dialog.open(DialogComponent, {
      width : '60%',
      
    });
  }
  openWeek(){
    this.dialog.open(WeekendReportComponent, {
      width : '60%',
    });
  }
  openCallRecord(){
    this.dialog.open(CallRecordComponent, {
      width : '60%',
    });
  }
  login(){
    this.dialog.open(LoginComponent,{
      width: '30%',
    })
  }
  signOut(){
    this.dialog.open(SignOutComponent,{
      width:'30'

    })
  }
  signIn(){
    this.dialog.open(SignInComponent, {
      width: '30%',
    })
  }

}
