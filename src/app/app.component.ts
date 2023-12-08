import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
//import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { WeekendReportComponent } from './weekend-report/weekend-report.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular13CRUD';

  constructor(private dialog : MatDialog){

  }
  openDialog() {  
    this.dialog.open(DialogComponent, {
      width : '40%',
      
    });
  }
  openWeek(){
    this.dialog.open(WeekendReportComponent, {
      width : '40%',
    });
  }

}
