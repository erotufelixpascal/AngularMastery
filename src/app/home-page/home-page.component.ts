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
    {Month:"December",date1:"12/03/2023", date2:"",date3:"" , date4:"", date5:""},
    {Month:"October",date1:"11/26/2023", date2:"11/19/2023",date3:"11/12/2023" , date4:"11/05/2023", date5:""},
    {Month:"November",date1:"10/29/2023", date2:"10/22/2023",date3:"10/15/2023" , date4:"10/08/2023", date5:"10/01/2023"},
    {Month:"January",date1:"", date2:"",date3:"" , date4:"", date5:""},
    {Month:"February",date1:"", date2:"",date3:"" , date4:"", date5:""},
  ]
 

}
