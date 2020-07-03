import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function profileReducer(state = initialState.schools, action) {
  switch (action.type) {
    case types.LOAD_SCHOOLS:
      return action.schools;
    default:
      return state;
  }
}
