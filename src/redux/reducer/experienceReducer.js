import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function experienceReducer(
  state = initialState.experience,
  action
) {
  switch (action.type) {
    case types.LOAD_EXPERIENCE:
      return action.experience;
    default:
      return state;
  }
}
