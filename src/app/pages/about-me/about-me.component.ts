import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutYouComponent implements OnInit {
  aboutForm: FormGroup;
  financesForm: FormGroup;
  step = 1;

  aboutControls = {};
  isEdited: boolean;

  constructor(private fb: FormBuilder, private http:HttpService) { }

  ngOnInit(): void {
    this.initAboutForm();
    this.initFinanceForm();
  }

  initAboutForm(){
    this.aboutForm = this.fb.group({
      firstname: ['', Validators.required],
      age: [null,Validators.required], 
      salary: [null, Validators.required],
      hasPartner: [false, Validators.required],
      partner: this.fb.group({
        firstname: [''],
        age: [null], 
        salary: [null],
      })
    });
  }

  


  initFinanceForm(){
    this.financesForm = this.fb.group({
      assets: this.fb.group({
        total: [null],
        cash: [null],
        shares: [null],
        superannuation: [null],
        investment: [null],
        other:[null]
      }),
      debts: this.fb.group({
        total: [null],
        mortgage: [null],
        creditcard: [null],
        carloan:[null],
        investment:[null],
        other:[null]
      })
      
    });
  }

  get firstname(){
    return this.aboutForm.get('firstname').value;
  }

  get hasPartner(){
    return this.aboutForm.get('hasPartner').value;
  }

  getAboutControls(control){
    return this.aboutForm.get(control).value;
  }

  getFinanceAssets(control){
    return this.financesForm.controls['assets'].get(control).value;
  }

  nextStep(num:number, control:string, isBack:string, stepper: MatStepper, backPartner:string){
    if(!isBack){
      if(this.hasPartner && stepper){
        stepper.next();
      }
      else if(backPartner && !stepper){
        console.log("HERE");
        this.isEdited = false;
        this.step = 1;
      }
      else{
        if(this.aboutForm.controls[control].valid){
          this.step = num;
        }
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

  clearEntries(control){
    this.financesForm.controls[control].reset();
  }

  startOver(stepper:MatStepper){
    stepper.reset();
    this.step = 1;
    stepper.selectedIndex = 0;
  }

  edit(stepper:MatStepper){
    this.step = 1;
    stepper.selectedIndex = 0;
    this.isEdited = true;
  }

  submitForm(){
    let obj = {...this.aboutForm.value, ...this.financesForm.value};
    this.http.post('api_url',obj).subscribe(res =>{
      alert('Success');
    })
  }


}
