import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Logodark from "./logo-dark.png";
import Logolight from "./logo-light.png";
import { useCookies } from "react-cookie";

function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  return (
    <>
      <header id="topnav" className="defaultscroll scroll-active">
        <div className="tagline">
          <div className="container">
            <div className="float-left">
              <div className="phone">
                <i className="mdi mdi-phone-classic" /> +(84) 966 529 474
              </div>
              <div className="email">
                <a href="#">
                  <i className="mdi mdi-email" /> Sresumevietnam@gmail.com
                </a>
              </div>
            </div>
            <div className="float-right">
              <ul
                className="topbar-list list-unstyled d-flex"
                style={{ margin: "11px 0px" }}
              >
                <li className="list-inline-item">
                  <a href="javascript:void(0);">
                    <i className="mdi mdi-account mr-2" />
                    Phan Duong Ngoc Do
                  </a>
                </li>
                <li className="list-inline-item">
                  <select id="select-lang" className="demo-default">
                    <option value>Language</option>
                    <option value="">English</option>
                    <option value="">Vietnamese (developing)</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="container">
          <div>
            <a href="index.html" className="logo">
              <img
                src={Logolight}
                height={20}
                width={150}
                className="logo-light"
              />
              <img
                src={Logodark}
                height={20}
                width={150}
                alt=""
                className="logo-dark"
              />
            </a>
          </div>
          <div className="buy-button">
            {cookies.user ? (
              <a
                href="javascript:void(0);"
                onClick={() => {
                  removeCookie("user");
                  window.location.reload();
                }}
              >
                <i class="fas fa-sign-in-alt"></i> Logout
              </a>
            ) : (
              <Link to="/login">
                <i class="fas fa-sign-in-alt"></i> Login
              </Link>
            )}
          </div>
          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle">
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </a>
            </div>
          </div>
          <div id="navigation">
            <ul className="navigation-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0)">Jobs</a>
                <span className="menu-arrow" />
                <ul className="submenu">
                  <li>
                    <Link to="/Job">Job List</Link>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0)">Quiz Test</a>
                <span className="menu-arrow" />
                <ul className="submenu">
                  <li>
                    <a href="#">Aptitude Questions</a>
                  </li>
                  <li>
                    <a href="#">Personality Test</a>
                  </li>

                  {/* <li className="has-submenu">
                      <a href="javascript:void(0)"> Candidates</a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="candidates-listing.html">
                            Candidates Listing
                          </a>
                        </li>
                        <li>
                          <a href="candidates-profile.html">
                            Candidates Profile
                          </a>
                        </li>
                        <li>
                          <a href="create-resume.html">Create Resume</a>
                        </li>
                      </ul>
                    </li> */}
                  {/* <li className="has-submenu">
                      <a href="javascript:void(0)"> Blog</a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="blog-grid.html">Blogs</a>
                        </li>
                        <li>
                          <a href="blog-sidebar.html">Blog Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li> */}
                  {/* <li className="has-submenu">
                      <a href="javascript:void(0)"> Employers</a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="employers-list.html">Employers List</a>
                        </li>
                        <li>
                          <a href="company-detail.html">Company Detail</a>
                        </li>
                      </ul>
                    </li> */}
                  {/* <li className="has-submenu">
                      <a href="javascript:void(0)"> User Pages</a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="signup.html">Signup</a>
                        </li>
                        <li>
                          <a href="recovery_passward.html">Forgot Password</a>
                        </li>
                      </ul>
                    </li> */}
                  {/* <li>
                      <a href="components.html"> Components</a>
                    </li> */}
                </ul>
              </li>
              <li>
                <a href="contact.html">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
