import { Component } from '@angular/core';

@Component({
  selector: 'app-call-record',
  templateUrl: './call-record.component.html',
  styleUrls: ['./call-record.component.scss']
})
export class CallRecordComponent {
  data =[
    {Name:"Stefan", Email:'stefan.heinz@gmail.com', Phone:'+1-46363-6464', SkypeID:'',WhatsAppID:'', Timezone:'MountainTime',Country:'United States',BestTime:'Various',Preferedmethod:'email',Forum:'Yes,07/1997,Munich,David Norris',Listener:'Stelan Heinz'},
    {Name:"FELIX", Email:'felix@gmail.com', Phone:'+256-786-4647', SkypeID:'',WhatsAppID:'', Timezone:'',Country:'',BestTimes:'',Preferedmethod:'',Forum:'',Listener:''}
  ]

}
