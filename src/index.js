import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import Header from "./js/components/Header";
import Main from "./js/components/Main";
import Footer from "./js/components/Footer";
import appReducer from "./js/store/reducers";
import "./styles.css";

const store = createStore(appReducer, applyMiddleware(thunkMiddleware));

const App = function() {
  return (
    <Provider store={store}>
      <div className="outer-wrap">
        <Router>
          <Header />
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
