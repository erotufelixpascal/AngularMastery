import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-call-record',
  templateUrl: './call-record.component.html',
  styleUrls: ['./call-record.component.scss']
})
export class CallRecordComponent {
  callRecord: FormGroup

  data =[
    {Name:"Stefan", Email:'stefan.heinz@gmail.com', Phone:'+1-46363-6464', SkypeID:'',WhatsAppID:'', Timezone:'MountainTime',Country:'United States',BestTime:'Various',Preferedmethod:'email',Forum:'Yes,07/1997,Munich,David Norris',Listener:'Stelan Heinz'},
    {Name:"FELIX", Email:'felix@gmail.com', Phone:'+256-786-4647', SkypeID:'',WhatsAppID:'', Timezone:'',Country:'',BestTimes:'',Preferedmethod:'',Forum:'',Listener:''}
  ];

  constructor(private _fb: FormBuilder) {
    this.callRecord = this._fb.group({
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


    })
  }
  onFormSubmit(){
    if(this.callRecord.valid){
      console.log(this.callRecord.value);
    }
  }

}

