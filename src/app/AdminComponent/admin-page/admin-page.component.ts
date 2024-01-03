import { Component, OnInit } from '@angular/core';
//import { DataService } from 'data.service';



@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  users=["Felix P"];
  data =["Felix P","Jane","Pascal","Thunder"];

  

  ngOnInit() {
    // Example: Fetch data
  //   //this.dataService.getData().subscribe((data) => {
  //     console.log(data);
  //   });

  //   // Example: Post data
  //   const postData = { key: 'value' };
  //   this.dataService.postData(postData).subscribe((response) => {
  //     console.log(response);
  //   });
    
   }

}
