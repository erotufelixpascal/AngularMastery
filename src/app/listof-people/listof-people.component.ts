import { Component } from '@angular/core';

@Component({
  selector: 'app-listof-people',
  templateUrl: './listof-people.component.html',
  styleUrls: ['./listof-people.component.scss']
})
export class ListofPeopleComponent {
  People= [
    {id:"1",firstName:"Jane",lastName:"Jory",Contact:"+1-234-434-984",Role:"Participant",AssignedCoursePartner:"",Callscheduled:"Yes",Status:"Active"},
    {id:"2",firstName:"Felix",lastName:"Micheal",Contact:"+77-234-434",Role:"",AssignedCoursePartner:"",Callscheduled:"Yes",Status:"Not Active"},
  
  ]

}
