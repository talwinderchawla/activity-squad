import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import {
  ActionTypes
} from "../../Store/activitySquad.actions";
import { enthusiast } from "../../Store/enthusiast.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.less"]
})
export class SignupFormComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    emailAddress: new FormControl(""),
    activity: new FormControl(""),
    comments: new FormControl("")
  });

  activityOptions: Array<{ name: string; value: string }> = new Array<{
    name: string;
    value: string;
  }>(
    { name: "Ice Skating", value: "ice_skating" },
    { name: "Carrom", value: "carrom" },
    { name: "Pot Luck", value: "pot_luck" },
    { name: "Hockey", value: "hockey" },
    { name: "Kite Flying", value: "kite_flying" }
  );

  constructor(
    private store: Store<{ enthusiasts: Array<enthusiast> }>,
    private router: Router
  ) {}

  ngOnInit() {}

  onSignUpSubmit = function() {
    console.log("Form was submitted" + this.signUpForm.value.firstName);
    this.signup_submit(this.preparePayLoad(this.signUpForm));
    this.show_enthusiasts_list();
  };

  preparePayLoad(signUpForm: FormGroup): enthusiast {
    let enthusiast_info: enthusiast;
    enthusiast_info = {
      firstName: this.signUpForm.value.firstName,
      lastName: this.signUpForm.value.lastName,
      emailAddress: this.signUpForm.value.emailAddress,
      activity: {
        name: this.activityOptions.find(
          a => a.value === this.signUpForm.value.activity
        ).name,
        value: this.signUpForm.value.activity
      },
      comments: this.signUpForm.value.comments
    };

    return enthusiast_info;
  }

  signup_submit(payloadData: enthusiast) {
    // this.store.dispatch(new signup_complete());
    this.store.dispatch({
      type: ActionTypes.SHOW_ENTHUSIAST_LIST,
      payload: payloadData
    });
  }

  show_enthusiasts_list() {
    this.router.navigate(["/enthusiasts_list"]);
  }

  
}
