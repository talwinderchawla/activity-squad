import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormComponent } from './signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { Store, StoreModule } from "@ngrx/store";
import { enthusiastsListReducer } from '../../Store/enthusiastsList.reducer';
import { SIGNUP_ROUTES } from '../signup.module';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormComponent ],
      imports: [ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        StoreModule.forRoot( { enthusiasts: enthusiastsListReducer }),
        BrowserAnimationsModule
      ],
        providers: [ {provide:Router , useValue: mockRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check that form starts empty', () => {
    expect(component.signUpForm.valid).toBeFalsy();
  });

  it('Form submission with valid values', ()=> {
    component.signUpForm.get('firstName').setValue("Donald");
    component.signUpForm.get('lastName').setValue("Duck");
    component.signUpForm.get('emailAddress').setValue("Donald.duck@disney.com");
    component.signUpForm.get('activity').setValue("carrom");
    component.signUpForm.get('comments').setValue("Donald Duck is interested to play carrom");
    spyOn(component, 'signup_submit');
    spyOn(component, 'show_enthusiasts_list');
    component.onSignUpSubmit();

    expect(component.signup_submit).toHaveBeenCalled();
    expect(component.show_enthusiasts_list).toHaveBeenCalled();
  });

  it('should check if enthusiasts list route is called when show_enthusiasts_list is calles', () => {
    component.show_enthusiasts_list();
    expect(router.navigate).toHaveBeenCalledWith(["/enthusiasts_list"]);
  });

  

});


