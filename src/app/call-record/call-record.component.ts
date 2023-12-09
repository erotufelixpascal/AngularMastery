import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-call-record',
  templateUrl: './call-record.component.html',
  styleUrls: ['./call-record.component.scss']
})
export class CallRecordComponent {
  callRecordForm: FormGroup;

  // data =[
  //   {Name:"Stefan", Email:'stefan.heinz@gmail.com', Phone:'+1-46363-6464', SkypeID:'',WhatsAppID:'', Timezone:'MountainTime',Country:'United States',BestTime:'Various',Preferedmethod:'email',Forum:'Yes,07/1997,Munich,David Norris',Listener:'Stelan Heinz'},
    
  // ];

  constructor(private _fb: FormBuilder) {
    this.callRecordForm = this._fb.group({
      minutes:'',
      questionOne :'',
      questionTwo :'',
      questionThree :'',
      questionFour :'',
      questionFive :'',
      questionSix :'',
      questionSeven :'',
      questionEight :'',
      questionNine :'',
      questionTen :''


    });
  }
  onFormSubmit(){
    if(this.callRecordForm.valid){
      console.log(this.callRecordForm.value);
    }
  }

}

