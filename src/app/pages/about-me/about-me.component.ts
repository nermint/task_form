import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutYouComponent implements OnInit {
  aboutForm: FormGroup;
  financesForm: FormGroup;
  step = 1;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initAboutForm();
    this.financesForm = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }

  initAboutForm(){
    this.aboutForm = this.fb.group({
      firstname: ['', Validators.required],
      age: [null,Validators.required], 
      salary: [null, Validators.required],
      hasPartner: [false, Validators.required],
      partner: this.fb.group({
        firstname: ['', Validators.required],
        age: [null,Validators.required], 
        salary: [null, Validators.required],
      })
    });
  }

  get firstname(){
    return this.aboutForm.get('firstname').value;
  }

  get hasPartner(){
    return this.aboutForm.get('hasPartner').value;
  }

  nextStep(num:number, control:string, isBack:string, addition:boolean){
    if(!isBack){
      if(this.aboutForm.controls[control].valid){
        this.step = num;
      }
    }
   else{
      this.step = num;
    }
   
    
  }

  changePartnerSts(has, stepper:MatStepper){
    this.aboutForm.patchValue({hasPartner: has});
    if(has){
      this.step = 1;
    }else{
      stepper.next();
    }
  }

}
