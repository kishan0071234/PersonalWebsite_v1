import { combineReducers } from "redux";
import profile from "./profileReducer.js";
import experience from "./experienceReducer.js";
import projects from "./projectReducer.js";
import blogs from "./blogReducer.js";

const rootReducer = combineReducers({
  profile,
  experience,
  projects,
  blogs,
});

export default rootReducer;
