import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark text-light bg-dark justify-content-center">
          <Header />
        </nav>
        <div className="container">
          <Body />
        </div>
        <footer className="footer py-3 bg-light mt-4">
          <div className="container-fluid">
            <span className="text-muted">
              {" "}
              <Footer />
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
