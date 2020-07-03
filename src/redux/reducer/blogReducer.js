import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function blogeReducer(state = initialState.blogs, action) {
  switch (action.type) {
    case types.LOAD_BLOGS:
      return action.blogs;
    default:
      return state;
  }
}
