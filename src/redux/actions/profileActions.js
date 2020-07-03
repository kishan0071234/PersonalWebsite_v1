import * as types from "./actionTypes";
import * as schools from "../../json/education.js";
import * as experience from "../../json/experience.js";
import * as blogs from "../../json/blog.js";
import * as projects from "../../json/project.js";

export function loadSchools() {
  return { type: types.LOAD_SCHOOLS, schools };
}

export function loadExperience() {
  return { type: types.LOAD_EXPERIENCE, experience };
}
export function loadBlogs() {
  return { type: types.LOAD_BLOGS, blogs };
}
export function loadProjects() {
  return { type: types.LOAD_PROJECTS, projects };
}
