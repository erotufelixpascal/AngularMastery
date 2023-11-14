import { Component,OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  freshnessList = ["Brandnew", "Refurbished", "Second Hand"];
  productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.productForm = this .formBuilder.group({
        productName : ['',Validators.required],
        category :['',Validators.required],
        freshness :['',Validators.required],
        price : ['',Validators.required],
        comment : ['',Validators.required],
        date : ['',Validators.required]

      })
      
    }

  }

