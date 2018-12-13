import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SIGNUP_ROUTES } from './signup/signup.module';

const routes: Routes = [
  { path: 'signup_form', loadChildren: './signup/signup.module#SignupModule'},
  { path: 'enthusiasts_list', loadChildren: './enthusiasts/enthusiasts.module#EnthusiastsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
