import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-list-of-people',
  templateUrl: './add-list-of-people.component.html',
  styleUrls: ['./add-list-of-people.component.scss']
})
export class AddListOfPeopleComponent implements OnInit {

  PeopleForm !: FormGroup;

  constructor(private _fb:FormBuilder){}

  ngOnInit(){
    // Roles :Roles[] =[
    //   {value:"Participant"},
    //   {value:"Course Partner"}
    // ];

    
    this.PeopleForm = this._fb.group({
      width:'100%',


    })

  }

  addPeople(){
    console.log(this.PeopleForm.value);
  }

}
