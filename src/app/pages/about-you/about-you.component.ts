import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.css']
})
export class AboutYouComponent implements OnInit {
  aboutForm: FormGroup;
  financesForm: FormGroup;
  isLinear = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.aboutForm = this.fb.group({
      firstname: [''],
      // age: [null, Validators.required]
    });
    this.financesForm = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }

  goBack(stepper: MatStepper){
    stepper.previous();
  }

  goNext(stepper: MatStepper){
    stepper.next();
  }

  getName(){
    this.aboutForm.get('firstName').value;
  }

}
