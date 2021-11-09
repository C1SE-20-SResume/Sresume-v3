import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isAlpha from "validator/lib/isAlpha";
import isMobilePhone from "validator/lib/isMobilePhone";
import isStrongPassword from "validator/lib/isStrongPassword";
import equals from "validator/lib/equals";

import { event } from "jquery";
function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validationMsg, setValidationMsg] = useState("");
  const onChangeFullName = (event) => {
    const value = event.target.value;
    setFullName(value);
  };

  const onChangeBirthday = (event) => {
    const value = event.target.value;
    setBirthday(value);
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
    var regexp = new RegExp(/^[^\d+]*[\d+]{0}[^\d+]*$/);

    const msg = [];
    if (isEmpty(fullName)) {
      msg.fullName = "please fill your full name !";
    } else if (!regexp.test(fullName)) {
      msg.fullName = "full name invalid !.";
    } else if (!isNaN(fullName)) {
      msg.fullName = "full name invalid !.";
    }
    if (isEmpty(phoneNumber)) {
      msg.phoneNumber = "please input your phone number !";
    } else if (!isMobilePhone(phoneNumber, "vi-VN")) {
      msg.phoneNumber = "your phone number is incorrect !";
    }
    if (isEmpty(email)) {
      msg.email = "please fill your email  !";
    } else if (!isEmail(email)) {
      msg.email = " your email is incorrect !";
    }
    if (isEmpty(password)) {
      msg.password = "empty!";
    }
    if (!isStrongPassword(password)) {
      msg.password = "error";
      if (!isStrongPassword(confirmPassword)) {
        msg.confirmPassword = "error";
      }
    }
    // compare password and confirm password
    if (isEmpty(confirmPassword)) {
      msg.confirmPassword = "empty!";
    }
    if (!equals(password, confirmPassword)) {
      msg.confirmPassword = "password is not match !";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const Register = (e) => {
    e.preventDefault();
    const isValid = validateAll();

    if (!isValid) return;
    console.log(process.env.REACT_APP_API_URL);
    fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: fullName,
        phone_number: phoneNumber,
        email: email,
        date_birth: birthday,
        password: password,
        gender: "f",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
        }
      })
      .catch((err) => console.log(err));
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
                      <form className="login-form" onSubmit={Register}>
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
                                required
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
                                Phone number
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="your phone number"
                                name="phoneNumber"
                                required
                                onChange={onChangePhoneNumber}
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
                                Your Email
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                required
                                onChange={onChangeEmail}
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
                                BirthDay
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="birthday"
                                name="birthday"
                                required
                                onChange={onChangeBirthday}
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
                              <label>Gender</label>
                              <div
                                style={
                                  ({ display: "flex" },
                                  { alignItems: "center" })
                                }
                              >
                                <span style={{ fontSize: "13px" }}>Male</span>
                                <input
                                  style={{ margin: "10px" }}
                                  value="m"
                                  name="gender"
                                  type="radio"
                                />
                                <span style={{ fontSize: "13px" }}>Female</span>
                                <input
                                  style={{ margin: "10px" }}
                                  value="f"
                                  name="gender"
                                  type="radio"
                                />
                                <span style={{ fontSize: "13px" }}>Other</span>
                                <input
                                  style={{ margin: "10px" }}
                                  value="o"
                                  name="gender"
                                  type="radio"
                                  defaultChecked
                                />
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
                                name="password"
                                required
                                onChange={onChangePassword}
                              />
                              <i
                                style={{ color: "red", fontSize: "10px" }}
                                id="msg-error"
                              >
                                {validationMsg.password}
                              </i>
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
                                onChange={onChangeconfirmPassword}
                              />
                              <i
                                style={{ color: "red", fontSize: "10px" }}
                                id="msg-error"
                              >
                                {validationMsg.confirmPassword}
                              </i>
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
                              className="btn btn-primary w-100"
                              onclick={Register}
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
                              </small>
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
