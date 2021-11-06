import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <div>
          <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                  <a href="javascript:void(0)">
                    <img src="" height={20} alt="" />
                  </a>
                  <p className="mt-4">
                    At vero eos et accusamus et iusto odio dignissim os ducimus
                    qui blanditiis praesentium
                  </p>
                  <ul className="social-icon social list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="#" className="rounded">
                        <i className="mdi mdi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="rounded">
                        <i className="mdi mdi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="rounded">
                        <i className="mdi mdi-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="rounded">
                        <i className="mdi mdi-google" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <p className="text-white mb-4 footer-list-title">Company</p>
                  <ul className="list-unstyled footer-list">
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Media &amp;
                        Press
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Career
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> CEOs{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Agencies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Our Apps
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <p className="text-white mb-4 footer-list-title">Resources</p>
                  <ul className="list-unstyled footer-list">
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Accounting{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> Billing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-foot">
                        <i className="mdi mdi-chevron-right" /> F.A.Q.
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <p className="text-white mb-4 footer-list-title f-17">
                    Business Hours
                  </p>
                  <ul className="list-unstyled text-foot mt-4 mb-0">
                    <li>Monday - Friday : 9:00 to 17:00</li>
                    <li className="mt-2">Saturday : 10:00 to 15:00</li>
                    <li className="mt-2">Sunday : Day Off (Holiday)</li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <hr />
          <footer className="footer footer-bar">
            <div className="container text-center">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className>
                    <p className="mb-0">
                      © 2021 Sresume-Ver3. Design ={" "}
                      <i className="mdi mdi-heart text-danger" />{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Footer;
