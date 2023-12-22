import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WeekendReportComponent } from './weekend-report/weekend-report.component';
import { CallRecordComponent } from './call-record/call-record.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ManageRelationshipsComponent } from './manage-relationships/manage-relationships.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'signIn', component:SignInComponent},
  {path:'weekendReport', component:WeekendReportComponent},
  {path:'callRecord', component:CallRecordComponent},
  {path:'homepage', component:HomePageComponent},
  {path:'managerelationships', component:ManageRelationshipsComponent},
  {path:'adminpage', component:AdminPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
