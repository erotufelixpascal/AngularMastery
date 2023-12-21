import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
// import { DialogService } from '../services/dialog.service';
// import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-weekend-report',
  templateUrl: './weekend-report.component.html',
  styleUrls: ['./weekend-report.component.scss']
})
export class WeekendReportComponent implements OnInit {
  weekendReportForm!:FormGroup;

  constructor(
    private fb1:FormBuilder,
    // private _callService:DialogService, 
    // private _callRef: DialogRef<WeekendReportComponent>
    ){}

  ngOnInit()  {
    this.weekendReportForm = this.fb1.group({
      weekendDate:'',
      questionOne: [''],
      questionTwo: [''],
      questionThree: [''],
      questionFour: [''],
      questionFive: [''],
      questionSix: [''],
          
    })
    
  }

  onFormSubmit(event: Event){
    if(this.weekendReportForm.valid){
      event.preventDefault();
      console.log(this.weekendReportForm.value);
    }
    // event.preventDefault();
    //   console.log(this.weekendReportForm.value);
  }
    
  

}
