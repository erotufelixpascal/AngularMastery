import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  Surveys =["December", "October" , "November"];
  Relationships =["Richard", "Jane" , "Peace" , "Tom" , "Foster"]

  

  login(){
    width:'100%'
  }

}
