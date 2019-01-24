import React, { Component } from "react";
import axios from "axios";
import Header from './Header';


class App extends Component {
  constructor() {
    super();
  }

 
  render() {
    return (
      <div className="container-fluid m-0 p-0">
      <Header />
      </div>
    );
  }
}

export default App;
