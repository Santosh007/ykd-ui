import C from "../utils/constants";
import { combineReducers } from "redux";

export const architecture = (state = [], action) =>
  action.type === C.ARCHITECTURE_PROJECTS ? action.payload : state;

export const interior = (state = [], action) =>
  action.type === C.INTERIOR_PROJECTS ? action.payload : state;

export const construction = (state = [], action) =>
  action.type === C.CONSTRUCTION_PROJECTS ? action.payload : state;

export const project = (state = [], action) =>
  action.type === C.SELECTED_PROJECT ? action.payload : state;

export default combineReducers({
  projects: combineReducers({
    architecture,
    interior,
    construction,
    project
  })
});
