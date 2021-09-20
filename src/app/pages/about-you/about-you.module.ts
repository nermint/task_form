import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutYouComponent } from './about-you.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AboutYouComponent }
]


@NgModule({
  declarations: [AboutYouComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule
  ]
})
export class AboutYouModule { }
