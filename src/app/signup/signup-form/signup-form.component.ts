import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { ActionTypes } from "../../Store/activitySquad.actions";
import { enthusiast } from "../../Store/enthusiast.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.less"]
})
export class SignupFormComponent implements OnInit {
  enthusiasts_list: Array<enthusiast>;

  // Reactive Form group along with formcontrols.
  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    emailAddress: new FormControl(""),
    activity: new FormControl(""),
    comments: new FormControl("")
  });

  // FIxed list of activities. THis can be externalized and given a seperate for to add more activities.
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

  /**
   * Method called when signup form is submitted.
   *
   */
  onSignUpSubmit = function() {
    this.signup_submit(this.preparePayLoad(this.signUpForm));
    this.show_enthusiasts_list();
  };

  /**
   * Prepare json object which will be pushed into the array of enthusiasts or interested persons.
   * @param signUpForm
   */
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

  /**
   * Dispatch SHOW_ENTHUSIAST_LIST action along with payload.
   * @param payloadData
   */
  signup_submit(payloadData: enthusiast) {
    // this.store.dispatch(new signup_complete());
    this.store.dispatch({
      type: ActionTypes.SHOW_ENTHUSIAST_LIST,
      payload: payloadData
    });
  }

  /**
   * Route to navigate to enthusiast list.
   */
  show_enthusiasts_list() {
    this.router.navigate(["/enthusiasts_list"]);
  }
}
