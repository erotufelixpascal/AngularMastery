import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-weekend-report',
  templateUrl: './weekend-report.component.html',
  styleUrls: ['./weekend-report.component.scss']
})
export class WeekendReportComponent implements OnInit {
  weekendReportForm!:FormGroup;

  constructor(private fb1:FormBuilder){}

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
    // if(this.weekendReportForm.valid){
    //   event.preventDefault();
    //   console.log(this.weekendReportForm.value);
    // }
    event.preventDefault();
      console.log(this.weekendReportForm.value);
  }
    
  

}
