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
    this.PeopleForm = this._fb.group({


    })

  }

  addPeople(){
    console.log(this.PeopleForm.value);
  }

}
