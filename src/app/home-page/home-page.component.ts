import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  Surveys =["December", "October" , "November"];
  Relationships =["Richard", "Jane" , "Peace" , "Tom" , "Foster"];
  Links=["Your Landmark Account","DCR&R on the website","Zoom setup test","other links 1","other links 2"];
  Files=["Document 1","Document 2","Document 3"];
  users=["Felix P"];

  survey =[
    {Month:"",date1:"", date2:"",date3:"" , date4:"", date5:""},
    {Month:"",date1:"", date2:"",date3:"" , date4:"", date5:""},
    {Month:"",date1:"", date2:"",date3:"" , date4:"", date5:""},
    {Month:"",date1:"", date2:"",date3:"" , date4:"", date5:""},
    {Month:"",date1:"", date2:"",date3:"" , date4:"", date5:""},
  ]


  

}
