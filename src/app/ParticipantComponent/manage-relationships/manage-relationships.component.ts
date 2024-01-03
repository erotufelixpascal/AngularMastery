import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-relationships',
  templateUrl: './manage-relationships.component.html',
  styleUrls: ['./manage-relationships.component.scss']
})
export class ManageRelationshipsComponent {
  
  Relationships =[
    {id:"1",name:"Richard",Relationshipfor:"Landmark",Active:"Yes",order:"1"},
    {id:"2",name:"Jane",Relationshipfor:"Home",Active:"No",order:"2"},
    {id:"3",name:"Peace",Relationshipfor:"School",Active:"Yes",order:"3"},
    {id:"4",name:"Emily",Relationshipfor:"Neighbourhood",Active:"No",order:"4"},
    {id:"5",name:"Foster",Relationshipfor:"Gym",Active:"Yes",order:"5"},
    {id:"6",name:"Felix",Relationshipfor:"Work",Active:"No",order:"6"},
    {id:"7",name:"Kris",Relationshipfor:"Landmark",Active:"Yes",order:"7"},
  ]

}
