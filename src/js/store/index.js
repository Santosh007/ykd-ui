import appReducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

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

export default (initialState = {}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(
    appReducer,
    initialState
  );
};
