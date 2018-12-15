import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatacheckGuard } from './enthusiasts/datacheck.guard';
//import { SIGNUP_ROUTES } from './signup/signup.module';

// Lazy loaded modules.
const routes: Routes = [
  { path: '', loadChildren: './signup/signup.module#SignupModule'},
  { path: 'signup_form', loadChildren: './signup/signup.module#SignupModule'},
  { path: 'enthusiasts_list', loadChildren: './enthusiasts/enthusiasts.module#EnthusiastsModule',
   canActivate: [DatacheckGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
