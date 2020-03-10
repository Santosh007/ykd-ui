import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./js/components/Header";
import Main from "./js/components/Main";
import Footer from "./js/components/Footer";

import "./styles.css";

const App = function() {
  return (
    <div className="outer-wrap">
      <Router>
        <Header />
        <div className="content">
          <Main />
        </div>
      </Router>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
/*
var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
*/
