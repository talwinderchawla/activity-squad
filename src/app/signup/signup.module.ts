import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule
} from "@angular/material";

export const SIGNUP_ROUTES = [{ path: "", component: SignupFormComponent }];
@NgModule({
  declarations: [SignupFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(SIGNUP_ROUTES),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [Store]
})
export class SignupModule {}
