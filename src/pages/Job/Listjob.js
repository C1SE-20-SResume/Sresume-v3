import React, { Component } from "react";
import { Link } from "react-router-dom";

class Listjob extends Component {
  render() {
    return (
      <>
        <section className="section pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title title-line pb-5">
                    Available job for you
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-1">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="left-sidebar">
                  <div className="accordion" id="accordionExample">
                    <div className="card rounded mt-4">
                      <a
                        data-toggle="collapse"
                        href="#collapseOne"
                        className="job-list"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div className="card-header" id="headingOne">
                          <h6 className="mb-0 text-dark f-18">Salary</h6>
                        </div>
                      </a>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                      >
                        <div className="card-body p-0">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio1"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted"
                              htmlFor="customRadio1"
                            >
                              0-500$
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio2"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted"
                              htmlFor="customRadio2"
                            >
                              500-1000$
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio3"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted"
                              htmlFor="customRadio3"
                            >
                              1000-2000$
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio4"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted"
                              htmlFor="customRadio4"
                            >
                              2000-3500$
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio5"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted"
                              htmlFor="customRadio5"
                            >
                              up than 3500$
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* collapse one end */}
                    <div className="card rounded mt-4">
                      <a
                        data-toggle="collapse"
                        href="#collapsetwo"
                        className="job-list"
                        aria-expanded="true"
                        aria-controls="collapsetwo"
                      >
                        <div className="card-header" id="headingtwo">
                          <h6 className="mb-0 text-dark f-18">Categories</h6>
                        </div>
                      </a>
                      <div
                        id="collapsetwo"
                        className="collapse show"
                        aria-labelledby="headingtwo"
                      >
                        <div className="card-body p-0">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio7"
                              name="customRadio1"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio7"
                            >
                              Mobile Developer
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio8"
                              name="customRadio1"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio8"
                            >
                              Web Developer
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio9"
                              name="customRadio1"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio9"
                            >
                              Games Developer
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio10"
                              name="customRadio1"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio10"
                            >
                              Full-Stack Developer
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio11"
                              name="customRadio1"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio11"
                            >
                              Project Manager
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio12"
                              name="customRadio1"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio12"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* collapse one end */}
                    {/* <div className="card rounded mt-4">
                      <a
                        data-toggle="collapse"
                        href="#collapsethree"
                        className="job-list"
                        aria-expanded="true"
                        aria-controls="collapsethree"
                      >
                        <div className="card-header" id="headingthree">
                          <h6 className="mb-0 text-dark f-18">Experince</h6>
                        </div>
                      </a>
                      <div
                        id="collapsethree"
                        className="collapse show"
                        aria-labelledby="headingthree"
                      >
                        <div className="card-body p-0">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio13"
                              name="customRadio2"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio13"
                            >
                              1Year to 2Year
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio14"
                              name="customRadio2"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio14"
                            >
                              2Year to 3Year
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio15"
                              name="customRadio2"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio15"
                            >
                              3Year to 4Year
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio16"
                              name="customRadio2"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio16"
                            >
                              IT Contractor
                            </label>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* collapse one end */}
                    <div className="card rounded mt-4">
                      <a
                        data-toggle="collapse"
                        href="#collapsefour"
                        className="job-list"
                        aria-expanded="true"
                        aria-controls="collapsefour"
                      >
                        <div className="card-header" id="headingfour">
                          <h6 className="mb-0 text-dark f-18">Location</h6>
                        </div>
                      </a>
                      <div
                        id="collapsefour"
                        className="collapse show"
                        aria-labelledby="headingfour"
                      >
                        <div className="card-body p-0">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio17"
                              name="customRadio3"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio17"
                            >
                              Ha Noi
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio18"
                              name="customRadio3"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio18"
                            >
                              Da Nang
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio19"
                              name="customRadio3"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio19"
                            >
                              TP.HCM
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio19"
                              name="customRadio3"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label ml-1 text-muted f-15"
                              htmlFor="customRadio19"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* collapse one end */}
                  </div>
                </div>
              </div>
              <div className="col-lg-9 mt-4 pt-2">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="show-results">
                      <div className="float-left">
                        <h5 className="text-dark mb-0 pt-2 f-18">
                          Showing results 0-20
                        </h5>
                      </div>
                      <div className="sort-button float-right">
                        <select className="nice-select rounded">
                          <option data-display="Select">Nothing</option>
                          <option value={1}>Web Developer</option>
                          <option value={2}>PHP Developer</option>
                          <option value={3}>Web Designer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mt-4 pt-2">
                    <div className="job-list-box border rounded">
                      <div className="p-3">
                        <div className="row align-items-center">
                          <div className="col-lg-2">
                            <div className="company-logo-img">
                              <img
                                src="images/featured-job/img-1.png"
                                alt=""
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-9">
                            <div className="job-list-desc">
                              <h6 className="mb-2">
                                <a href="#" className="text-dark">
                                  Web Designer, Graphic Designer, UI/UX Designer
                                  &amp; Art
                                </a>
                              </h6>
                              <p className="text-muted mb-0">
                                <i className="mdi mdi-bank mr-2" />
                                Web Themes.pvt.Ltd
                              </p>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-3">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-map-marker mr-2" />
                                    Confederate Drive Potsdam, NY 13676
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-clock-outline mr-2" />
                                    1 Minute ago
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="job-list-button-sm text-right">
                              <span className="badge badge-success">
                                Full-Time
                              </span>
                              <div className="mt-3">
                                <Link
                                  to="/jobdetail"
                                  className="btn btn-sm btn-primary"
                                >
                                  Apply
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 pt-2">
                    <div className="job-list-box border rounded">
                      <div className="p-3">
                        <div className="row align-items-center">
                          <div className="col-lg-2">
                            <div className="company-logo-img">
                              <img
                                src="images/featured-job/img-2.png"
                                alt=""
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-9">
                            <div className="job-list-desc">
                              <h6 className="mb-2">
                                <a href="#" className="text-dark">
                                  PHP Developer, Team of PHP &amp; IT Co
                                </a>
                              </h6>
                              <p className="text-muted mb-0">
                                <i className="mdi mdi-bank mr-2" />
                                Web Themescode.pvt.Ltd
                              </p>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-3">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-map-marker mr-2" />
                                    Rogers Street Cincinnati, OH 45202
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-clock-outline mr-2" />
                                    3 Minute ago
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="job-list-button-sm text-right">
                              <span className="badge badge-success">
                                Part-Time
                              </span>
                              <div className="mt-3">
                                <a href="#" className="btn btn-sm btn-primary">
                                  Apply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 pt-2">
                    <div className="job-list-box border rounded">
                      <div className="p-3">
                        <div className="row align-items-center">
                          <div className="col-lg-2">
                            <div className="company-logo-img">
                              <img
                                src="images/featured-job/img-3.png"
                                alt=""
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-9">
                            <div className="job-list-desc">
                              <h6 className="mb-2">
                                <a href="#" className="text-dark">
                                  Website Developer &amp; Software Developer
                                </a>
                              </h6>
                              <p className="text-muted mb-0">
                                <i className="mdi mdi-bank mr-2" />
                                Web Creative.pvt.Ltd
                              </p>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-3">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-map-marker mr-2" />
                                    Carolina Avenue Encinal, TX 78019
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-clock-outline mr-2" />
                                    5 Minute ago
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="job-list-button-sm text-right">
                              <span className="badge badge-success">
                                Full-Time
                              </span>
                              <div className="mt-3">
                                <a href="#" className="btn btn-sm btn-primary">
                                  Apply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 pt-2">
                    <div className="job-list-box border rounded">
                      <div className="p-3">
                        <div className="row align-items-center">
                          <div className="col-lg-2">
                            <div className="company-logo-img">
                              <img
                                src="images/featured-job/img-4.png"
                                alt=""
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-9">
                            <div className="job-list-desc">
                              <h6 className="mb-2">
                                <a href="#" className="text-dark">
                                  Head of Developers &amp; MySQL Developers
                                </a>
                              </h6>
                              <p className="text-muted mb-0">
                                <i className="mdi mdi-bank mr-2" />
                                Design Brand.pvt.Ltd
                              </p>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-3">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-map-marker mr-2" />
                                    Holt Street West Palm Beach, FL 33401
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-clock-outline mr-2" />
                                    7 Minute ago
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="job-list-button-sm text-right">
                              <span className="badge badge-success">
                                Full-Time
                              </span>
                              <div className="mt-3">
                                <a href="#" className="btn btn-sm btn-primary">
                                  Apply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 pt-2">
                    <div className="job-list-box border rounded">
                      <div className="p-3">
                        <div className="row align-items-center">
                          <div className="col-lg-2">
                            <div className="company-logo-img">
                              <img
                                src="images/featured-job/img-5.png"
                                alt=""
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-9">
                            <div className="job-list-desc">
                              <h6 className="mb-2">
                                <a href="#" className="text-dark">
                                  Application Developer &amp; Web Designer
                                </a>
                              </h6>
                              <p className="text-muted mb-0">
                                <i className="mdi mdi-bank mr-2" />
                                Web Coding.pvt.Ltd
                              </p>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-3">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-map-marker mr-2" />
                                    Stark Hollow Road Hillrose, CO 80733
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-clock-outline mr-2" />
                                    8 Minute ago
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="job-list-button-sm text-right">
                              <span className="badge badge-success">
                                Part-Time
                              </span>
                              <div className="mt-3">
                                <a href="#" className="btn btn-sm btn-primary">
                                  Apply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 pt-2">
                    <div className="job-list-box border rounded">
                      <div className="p-3">
                        <div className="row align-items-center">
                          <div className="col-lg-2">
                            <div className="company-logo-img">
                              <img
                                src="images/featured-job/img-6.png"
                                alt=""
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-9">
                            <div className="job-list-desc">
                              <h6 className="mb-2">
                                <a href="#" className="text-dark">
                                  IT Department Manager &amp;
                                  Blogger-Entrepenour
                                </a>
                              </h6>
                              <p className="text-muted mb-0">
                                <i className="mdi mdi-bank mr-2" />
                                Themes Brand.pvt.Ltd
                              </p>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-3">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-map-marker mr-2" />
                                    Riverside Drive Athens, GA 30606
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-clock-outline mr-2" />
                                    10 Minute ago
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="job-list-button-sm text-right">
                              <span className="badge badge-success">
                                Full-Time
                              </span>
                              <div className="mt-3">
                                <a href="#" className="btn btn-sm btn-primary">
                                  Apply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 pt-2">
                    <div className="job-list-box border rounded">
                      <div className="p-3">
                        <div className="row align-items-center">
                          <div className="col-lg-2">
                            <div className="company-logo-img">
                              <img
                                src="images/featured-job/img-7.png"
                                alt=""
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-9">
                            <div className="job-list-desc">
                              <h6 className="mb-2">
                                <a href="#" className="text-dark">
                                  Frontend/Backendd Developer
                                </a>
                              </h6>
                              <p className="text-muted mb-0">
                                <i className="mdi mdi-bank mr-2" />
                                Design Code.pvt.Ltd
                              </p>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-3">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-map-marker mr-2" />
                                    Rosemont Avenue Orlando, FL 32811
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-clock-outline mr-2" />
                                    11 Minute ago
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="job-list-button-sm text-right">
                              <span className="badge badge-success">
                                Full-Time
                              </span>
                              <div className="mt-3">
                                <a href="#" className="btn btn-sm btn-primary">
                                  Apply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 pt-2">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination job-pagination mb-0 justify-content-center">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            href="#"
                            tabIndex={-1}
                            aria-disabled="true"
                          >
                            <i className="mdi mdi-chevron-double-left" />
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <i className="mdi mdi-chevron-double-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Listjob;
