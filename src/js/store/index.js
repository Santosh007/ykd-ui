import appReducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import C from "../utils/constants";
import initialState from "../../initialState";

const consoleMessages = store => next => action => {
  let result;
  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log(
    "Architecture projects",
    store.getState().projects.architecture.length
  );
  result = next(action);
  let { projects } = store.getState();
  console.log(`
    Architecture projevts  : ${projects.architecture.length}
    `);
  console.groupEnd();

  return result;
};

const fetchingProjects = store => next => action => {
  let newPayload;
  switch (action.type) {
    case C.ARCHITECTURE_PROJECTS:
      newPayload = isEmpty(store.getState().architecture, action.payload)
        ? initialState.projects.architecture
        : action.payload;
      break;
    case C.INTERIOR_PROJECTS:
      newPayload = isEmpty(store.getState().interior, action.payload)
        ? initialState.projects.interior
        : action.payload;
      break;
    case C.CONSTRUCTION_PROJECTS:
      newPayload = isEmpty(store.getState().construction, action.payload)
        ? initialState.projects.construction
        : action.payload;
      break;
    default:
      newPayload = action.payload;
      break;
  }
  let newAction = {
    type: action.type,
    payload: newPayload
  };
  return next(newAction);
};

const isEmpty = (projects, payload) => {
  if (projects && projects.length) {
    if (payload && payload.length) {
      return false;
    }
  }
  return true;
};

export default (initialState = {}) => {
  return applyMiddleware(thunk, fetchingProjects)(createStore)(
    appReducer,
    initialState
  );
};
