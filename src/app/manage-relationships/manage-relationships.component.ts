import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-relationships',
  templateUrl: './manage-relationships.component.html',
  styleUrls: ['./manage-relationships.component.scss']
})
export class ManageRelationshipsComponent {
  
  Relationships =[
    {name:"Richard",Relationshipfor:"Landmark",Active:"Yes",order:"1"},
    {name:"Jane",Relationshipfor:"Home",Active:"No",order:"2"},
    {name:"Peace",Relationshipfor:"School",Active:"Yes",order:"3"},
    {name:"Emily",Relationshipfor:"Neighbourhood",Active:"No",order:"4"},
    {name:"Foster",Relationshipfor:"Gym",Active:"Yes",order:"5"},
    {name:"Felix",Relationshipfor:"Work",Active:"No",order:"6"},
    {name:"Kris",Relationshipfor:"Landmark",Active:"Yes",order:"7"},
  ]

}
