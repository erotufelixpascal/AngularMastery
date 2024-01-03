import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WeekendReportComponent } from './weekend-report/weekend-report.component';
import { CallRecordComponent } from './call-record/call-record.component';
import { HomePageComponent } from './ParticipantComponent/home-page/home-page.component';
import { ManageRelationshipsComponent } from './ParticipantComponent/manage-relationships/manage-relationships.component';
import { AdminPageComponent } from './AdminComponent/admin-page/admin-page.component';
import { ListofPeopleComponent } from './AdminComponent/listof-people/listof-people.component';
import { AddListOfPeopleComponent } from './AdminComponent/add-list-of-people/add-list-of-people.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'signIn', component:SignInComponent},
  {path:'weekendReport', component:WeekendReportComponent},
  {path:'callRecord', component:CallRecordComponent},
  {path:'homepage', component:HomePageComponent},
  {path:'managerelationships', component:ManageRelationshipsComponent},
  {path:'adminpage', component:AdminPageComponent},
  {path:'listofpeople', component:ListofPeopleComponent},
  {path:'addlistofpeople', component:AddListOfPeopleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
