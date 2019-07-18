 import { Component, OnInit } from '@angular/core';
 import { FormControl } from "@angular/forms";
 import { FormGroup } from "@angular/forms";
 import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

 @Component({
   selector: 'app-stepper',
  templateUrl: './stepper.component.html',
   styleUrls: ['./stepper.component.scss']
 })


 export class StepperComponent implements OnInit {
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    fourthFormGroup:FormGroup;
    fifthFormGroup:FormGroup;
    isOptional = false;
    data:any;
    
    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ''
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ''
      });
      this.thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ''
      });
      this.fourthFormGroup = this._formBuilder.group({
        fourthCtrl: ''
      });
      this.fifthFormGroup = this._formBuilder.group({
        fifthCtrl: ''
      });
      this.data=JSON.parse(sessionStorage.getItem("candidates"));
      console.log(this.data);
    }

  }
