import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import axios from "axios";

class SingUp extends Component {
  constructor() {
    super();
    this.state = {
      errors: "",
      response: null
    };
    this.renderErrors = str => {
      return str;
    };
  }

  submit = e => {
    e.preventDefault();
    if (this.state.email != undefined && this.state.password != undefined) {
      if (this.state.password === this.state.password_confirmation) {
        this.setState({
          errors: "Registration Succeeded!!\n Log in your Chatroom"
        });
        axios
          .post("/registration", this.state)
          .then(function(response) {
              setTimeout(() => {
                window.location.replace("http://localhost:8080/signin");
              }, 2500);
            
          })
          .catch(function(error) {
            console.log("error:", error);
          });
      } else {
        this.setState({
          errors: "Please, be sure you repeated correctly your password"
        });
      }
    } else {
      this.setState({ errors: "Please, fill all fields" });
    }
    e.target.reset();
  };

  getFormData = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log(this.state.response);
    return (
      <div className="container">
        <div className="row w-50 mx-auto mt-5 pt-5">
          <form
            method="POST"
            action="/registration"
            role="form"
            onSubmit={this.submit}
          >
            <h2 className="text-center">Sign Up</h2>
            <hr className="colorgraph" />
            {this.state.errors == "" || (
              <div className="card bg-warning p-2 text-center">
                {this.renderErrors(this.state.errors)}
              </div>
            )}
            <hr className="colorgraph" />
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="form-control input-lg"
                    placeholder="First Name"
                    tabIndex="1"
                    onChange={this.getFormData}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="form-control input-lg"
                    placeholder="Last Name"
                    tabIndex="2"
                    onChange={this.getFormData}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="street"
                    id="street"
                    className="form-control input-lg"
                    placeholder="Street"
                    tabIndex="3"
                    onChange={this.getFormData}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    className="form-control input-lg"
                    placeholder="Postcode"
                    tabIndex="3"
                    onChange={this.getFormData}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="form-control input-lg"
                    placeholder="City"
                    tabIndex="3"
                    onChange={this.getFormData}
                  />
                </div>
              </div>
            </div>
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
              <div className="col-xs-12 col-sm-6 col-md-6">
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
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="form-group">
                  <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    className="form-control input-lg"
                    placeholder="Confirm Password"
                    tabIndex="6"
                    onChange={this.getFormData}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-8 col-sm-9 col-md-9" />
            </div>

            <hr className="colorgraph" />
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary btn-block btn-lg"
                  tabIndex="7"
                />
              </div>
              <div className="col-xs-12 col-md-6">
                <Link to="/signin">
                  <button className="btn btn-primary btn-block btn-lg">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SingUp;
