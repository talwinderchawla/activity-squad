import { Action } from "@ngrx/store";
import { ActionTypes } from "./activitySquad.actions";
import { enthusiast } from "./enthusiast.model";

export const initialState: Array<enthusiast> = new Array<enthusiast>();

export function enthusiastsListReducer(
  state = initialState,
  action: ActionWithPayload<enthusiast>
) {
  switch (action.type) {
    case ActionTypes.SHOW_ENTHUSIAST_LIST:
      state.push(action.payload);
      return state;
    default:
      return state;
  }
}

export interface ActionWithPayload<enthusiast> extends Action {
  payload: enthusiast;
}
