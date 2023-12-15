import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  Surveys =["December", "October" , "November"];
  Relationships =["Richard", "Jane" , "Peace" , "Tom" , "Foster"]
  Links=["Your Landmark Account","DCR&R on the website","Zoom setup test","other links 1","other links 2"]
  Files=["Document 1","Document 2","Document 3"]

  login(){
    width:'100%'
  }

}
