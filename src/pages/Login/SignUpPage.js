import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isAlpha from "validator/lib/isAlpha";
import isMobilePhone from "validator/lib/isMobilePhone";
import isStrongPassword from "validator/lib/isStrongPassword";
function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const onChangeFullName = (event) => {
    const value = event.target.value;
    setFullName(value);
  };
  const onChangePhoneNumber = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };
  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const onChangeconfirmPassword = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };
  const validateAll = () => {
    const msg = [];
    if (isEmpty(fullName)) {
      msg.fullName = "please input your full name !";
    } else if (!isAlpha(fullName)) {
      msg.fullName = "full name contains only letters (a-zA-Z).";
    }
    if (isEmpty(phoneNumber)) {
      msg.phoneNumber = "please input your phone number !";
    } else if (!isMobilePhone(phoneNumber, "vi-VN")) {
      msg.phoneNumber = "your phone number is incorrect !";
    }
    if (isEmpty(email)) {
      msg.email = "please input your email  !";
    } else if (!isEmail(email)) {
      msg.email = " your email is incorrect !";
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const onSubmitLogin = (event) => {
    console.log(useState.firstName);
    const isValid = validateAll();
    if (!isValid) return;
  };
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
                                Fullname <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="your fullname ?"
                                name="fullName"
                                autoComplete="fullName"
                                id="fullName"
                                onChange={onChangeFullName}
                              />
                              <i
                                style={{ color: "red", fontSize: "10px" }}
                                id="msg-error"
                              >
                                {validationMsg.fullName}
                              </i>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group position-relative">
                              <label>
                                Phone number{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="your phone number"
                                name="phoneNumber"
                                autoComplete="phoneNumber"
                                id="phoneNumber"
                                onChange={onChangePhoneNumber}
                                required
                              />
                              <i
                                style={{ color: "red", fontSize: "10px" }}
                                id="msg-error"
                              >
                                {validationMsg.phoneNumber}
                              </i>
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
                                autoComplete="email"
                                id="email"
                                onChange={onChangeEmail}
                                required
                              />
                              <i
                                style={{ color: "red", fontSize: "10px" }}
                                id="msg-error"
                              >
                                {validationMsg.email}
                              </i>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group position-relative">
                              <label>
                                Gender <span className="text-danger">*</span>
                              </label>
                              <div
                                style={
                                  ({ display: "flex" },
                                  { alignItems: "center" })
                                }
                              >
                                <span style={{ fontSize: "13px" }}>Male</span>
                                <input
                                  style={{ margin: "10px" }}
                                  id="gender"
                                  value="m"
                                  name="male"
                                  type="radio"
                                />
                                <span style={{ fontSize: "13px" }}>Female</span>
                                <input
                                  style={{ margin: "10px" }}
                                  id="gender"
                                  value="f"
                                  name="female"
                                  type="radio"
                                />
                                <span style={{ fontSize: "13px" }}>Other</span>
                                <input
                                  style={{ margin: "10px" }}
                                  id="gender"
                                  value="o"
                                  name="other"
                                  type="radio"
                                />
                                <i>sá</i>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group position-relative">
                              <label>
                                Password <span className="text-danger">*</span>
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
                            <button
                              type="submit"
                              onClick={onSubmitLogin}
                              className="btn btn-primary w-100"
                            >
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

export default SignUpPage;
