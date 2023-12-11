import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WeekendReportComponent } from './weekend-report/weekend-report.component';
import { CallRecordComponent } from './call-record/call-record.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'signIn', component:SignInComponent},
  {path:'weekendReport', component:WeekendReportComponent},
  {path:'callRecord', component:CallRecordComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
