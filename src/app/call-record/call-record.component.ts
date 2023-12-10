import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-call-record',
  templateUrl: './call-record.component.html',
  styleUrls: ['./call-record.component.scss']
})
export class CallRecordComponent implements OnInit {
  callRecordForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.callRecordForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      skypeId: [''],
      phone: [''],
      WhatsAppID: [''],
      timezone: [''],
      country: [''],
      bestTimes: [''],
      preferedMethod: [''],
      forum: [''],
      listener: [''],
      chosenDate: [''],
      minutes: ['', Validators.required],
      questionOne: [''],
      questionTwo: [''],
      questionThree: [''],
      questionFour: [''],
      questionFive: [''],
      questionSix: [''],
      questionSeven: [''],
      questionEight: ['']
      
    });
  }

  onFormSubmit(event: Event) {
    // if (this.callRecordForm.valid) {
    //   event.preventDefault();
    //   console.log('Form submitted:', this.callRecordForm.value);
    // }
    event.preventDefault();
      console.log('Form submitted:', this.callRecordForm.value);
  }
}
