import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store,  StoreModule } from '@ngrx/store';

export const SIGNUP_ROUTES = [
  { path: '' , component: SignupFormComponent}
]
@NgModule({
  declarations: [SignupFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(SIGNUP_ROUTES)
  ],
  providers: [ Store]
})
export class SignupModule { }
