import React, { Component } from "react";
import axios from "axios";
import Header from './Header';
import io from 'socket.io-client';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    this.socket= io();
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
