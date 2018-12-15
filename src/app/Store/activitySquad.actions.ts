import { Action } from "@ngrx/store";

export enum ActionTypes {
  SUBMIT_SIGNUP = "[ActivtySquad Component] SUBMIT_SIGNUP",
  SHOW_ENTHUSIAST_LIST = "[ActivtySquad Component] SHOW_ENTHUSIAST_LIST",
  Reset = "[Counter Component] Reset"
}

export class signup_complete implements Action {
  readonly type = ActionTypes.SHOW_ENTHUSIAST_LIST;
  payload = {
    firstName: "Testing123",
    lastName: "",
    emailAddress: "",
    activity: "",
    comments: ""
  };
}
