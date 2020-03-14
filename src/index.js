import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
//import storeFactory from "./js/store";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import Header from "./js/components/Header";
import Menu from "./js/connectors/Menu";
import Main from "./js/components/Main";
import Footer from "./js/components/Footer";
import appReducer from "./js/store/reducers";
import "./styles.css";

const store = createStore(appReducer, applyMiddleware(thunkMiddleware)); //storeFactory(initalState); //createStore(appReducer, applyMiddleware(thunkMiddleware));
//window.store = store;
const App = function() {
  return (
    <Provider store={store}>
      <div className="outer-wrap">
        <Router>
          <Header />
          <Menu />
          <div className="content">
            <Main />
          </div>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
