import React, { Component } from "react";
import axios from "axios";

class SingIn extends Component {
  constructor() {
    super();
    this.state = {};
  }

  submit = e => {
    if (this.state.email != "" && this.state.password != "") {
      axios
        .post("/login", this.state)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log("error:", error);
        });
    }
  };

  getFormData = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row mx-auto mt-5 pt-5">
          <form
            className="mx-auto"
            method="POST"
            action="/login"
            role="form"
            onSubmit={this.submit}
          >
            <h2 className="text-center">Sign In</h2>
            <hr className="colorgraph" />
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-12">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control input-lg"
                    placeholder="Email Address"
                    tabIndex="4"
                    onChange={this.getFormData}
                  />
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-12">
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control input-lg"
                        placeholder="Password"
                        tabIndex="5"
                        onChange={this.getFormData}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                  onClick={this.getFormData}
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SingIn;
