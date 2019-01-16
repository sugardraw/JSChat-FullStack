import React, { Component } from "react";

class SingUp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  submit = e => {
    console.log(e);
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
        <div className="row w-75 mx-auto mt-5 pt-5">
          <form method="POST" action="/" role="form" onSubmit={this.submit}>
            <h2 className="text-center">Sign Up</h2>
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
              <div className="col-xs-4 col-sm-3 col-md-3">
                <span className="button-checkbox">
                  <button
                    type="button"
                    className="btn"
                    data-color="info"
                    tabIndex="7"
                  >
                    I Agree
                  </button>
                  <input
                    type="checkbox"
                    name="t_and_c"
                    id="t_and_c"
                    className="hidden"
                    value="1"
                    onChange={this.getFormData}
                  />
                </span>
              </div>
              <div className="col-xs-8 col-sm-9 col-md-9">
                By clicking{" "}
                <strong className="label label-primary">Register</strong>, you
                agree to the{" "}
                <a href="#" data-toggle="modal" data-target="#t_and_c_m">
                  Terms and Conditions
                </a>{" "}
                set out by this site, including our Cookie Use.
              </div>
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
                <a href="#" className="btn btn-success btn-block btn-lg">
                  Sign In
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SingUp;
