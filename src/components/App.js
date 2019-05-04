import React, { Component } from "react";
import axios from "axios";
import Header from './Header';


class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="container-fluid m-0 p-0 ">
        <Header />
        <div className="jumbotron w-75 p-5 m-5 mx-auto text-center">
          <h1 className="display-4">To test this chat application</h1>
          <div className="col-md-10 mx-auto m-3">
            <ul className="lead text-left">
              <li> <h5>Open the app in several computers.</h5></li>
              <li> <h5>Register different users in all of them and log every user into the chat room.</h5></li>
              <li> <h5> From now on, you can send text messages.</h5></li>
              <li> <h5> Finally, press the logout button on the top right corner in order to leave the chat room.</h5></li>
            </ul>
          </div>
          <hr />
          <p className="lead">
            <h5>Thanks for visiting!,<br /> Sergio Uslé</h5>
          </p>
        </div>

      </div>
    );
  }
}

export default App;
