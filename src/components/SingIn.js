import React, { Component } from "react";

class SingIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mx-auto mt-5 pt-5">
          <form className="mx-auto" method="POST" action="/" role="form">
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
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12">
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

export default SingIn;
