import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpPage extends Component {
  render() {
    return (
      <>
        <div>
          <div className="back-to-home rounded d-none d-sm-block">
            <a
              href="index.html"
              className="text-white rounded d-inline-block text-center"
            >
              <i className="mdi mdi-home" />
            </a>
          </div>
          <section
            className="vh-100"
            style={{
              background:
                'url("https://via.placeholder.com/2000X1333//88929f/5a6270C/O https://placeholder.com/") center center',
            }}
          >
            <div className="home-center">
              <div className="home-desc-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <div className="login_page bg-white shadow rounded p-4">
                        <div className="text-center">
                          <h4 className="mb-4">Signup</h4>
                        </div>
                        <form className="login-form">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group position-relative">
                                <label>
                                  First name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="First Name"
                                  name="s"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group position-relative">
                                <label>
                                  Last name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Last Name"
                                  name="s"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group position-relative">
                                <label>
                                  Your Email{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email"
                                  name="email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group position-relative">
                                <label>
                                  Password{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Password"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group position-relative">
                                <label>
                                  Confirm Password{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Confirm Password"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="custom-control m-0 custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customCheck1"
                                  >
                                    I Accept{" "}
                                    <a href="#" className="text-primary">
                                      Terms And Condition
                                    </a>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button className="btn btn-primary w-100">
                                Register
                              </button>
                            </div>
                            <div className="col-lg-12 mt-4 text-center">
                              <h6>Or Signup With</h6>
                              <ul className="list-unstyled social-icon mb-0 mt-3">
                                <li className="list-inline-item">
                                  <a
                                    href="javascript:void(0)"
                                    className="rounded"
                                  >
                                    <i
                                      className="mdi mdi-facebook"
                                      title="Facebook"
                                    />
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a
                                    href="javascript:void(0)"
                                    className="rounded"
                                  >
                                    <i
                                      className="mdi mdi-google-plus"
                                      title="Google"
                                    />
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a
                                    href="javascript:void(0)"
                                    className="rounded"
                                  >
                                    <i
                                      className="mdi mdi-github-circle"
                                      title="Github"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mx-auto">
                              <p className="mb-0 mt-3">
                                <small className="text-dark mr-2">
                                  Already have an account ?
                                </small>{" "}
                                <Link
                                  to="/login"
                                  className="text-dark font-weight-bold"
                                >
                                  Sign in
                                </Link>
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default SignUpPage;
