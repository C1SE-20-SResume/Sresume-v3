import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ListJobHome() {
  const [cookies, setCookies] = useCookies(["user"]);
  const [listUsers, setListUser] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/job`)
      .then((res) => res.json())
      .then((data) => setListUser(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title title-line pb-5">Find Your Jobs</h4>
                <p className="text-muted para-desc mx-auto mb-1">
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center mt-4 pt-2">
              <ul
                className="nav nav-pills nav nav-pills bg-white rounded nav-justified flex-column flex-sm-row"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link rounded active"
                    id="recent-job-tab"
                    data-toggle="pill"
                    href="#recent-job"
                    role="tab"
                    aria-controls="recent-job"
                    aria-selected="true"
                  >
                    Recent Jobs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link rounded"
                    id="featured-job-tab"
                    data-toggle="pill"
                    href="#featured-job"
                    role="tab"
                    aria-controls="featured-job"
                    aria-selected="false"
                  >
                    Featured Jobs
                  </a>
                </li>
                {/* <li className="nav-item">
                    <a
                      className="nav-link rounded"
                      id="part-job-tab"
                      data-toggle="pill"
                      href="#part-job"
                      role="tab"
                      aria-controls="part-job"
                      aria-selected="false"
                    >
                      Part Time
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link rounded"
                      id="full-job-tab"
                      data-toggle="pill"
                      href="#full-job"
                      role="tab"
                      aria-controls="full-job"
                      aria-selected="false"
                    >
                      Full Time
                    </a>
                  </li> */}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tab-content mt-2" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="recent-job"
                  role="tabpanel"
                  aria-labelledby="recent-job-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                          return (
                            <Link
                              to={`/job-detail/${item.id}`}
                              className="col-span-1"
                              key={index}
                            >
                              <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                <div className="lable text-center pt-2 pb-2">
                                  <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star" />
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-4">
                                  <div className="row align-items-center">
                                    <div className="col-md-2">
                                      <div className="mo-mb-2">
                                        <img
                                          style={
                                            ({ width: "84px" },
                                            { height: "84px" })
                                          }
                                          src={item.logo_url}
                                          alt=""
                                          className="img-fluid mx-auto d-block"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div>
                                        <h5 className="f-18">
                                          <a href="#" className="text-dark">
                                            {item.job_title}
                                          </a>
                                        </h5>
                                        <p className="text-muted mb-0">
                                          {item.company_name}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div>
                                        <p className="text-muted mb-0">
                                          <i className="mdi mdi-map-marker text-primary mr-2" />
                                          {item.job_place}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div>
                                        <p className="text-muted mb-0 mo-mb-2">
                                          <span className="text-primary">
                                            $
                                          </span>
                                          {item.salary}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div>
                                        <p
                                          style={{ fontSize: "12px" }}
                                          className="text-muted mb-0"
                                        >
                                          <ion-icon
                                            id="calendar-icon"
                                            name="calendar-outline"
                                          ></ion-icon>
                                          {item.updated_at}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-3 bg-light">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div>
                                        <p className="text-muted mb-0 mo-mb-2">
                                          <span className="text-dark">
                                            Experience :
                                          </span>{" "}
                                          1 - 2 years
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <p className="text-muted mb-0 mo-mb-2">
                                          <span className="text-dark">
                                            Notes :
                                          </span>{" "}
                                          languages only differ in their
                                          grammar.{" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div>
                                        <a href="#" className="text-primary">
                                          Apply Now{" "}
                                          <i className="mdi mdi-chevron-double-right" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="featured-job"
                  role="tabpanel"
                  aria-labelledby="featured-job-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-2.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    Php Developer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Themes pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Berkshire Circle Knoxville
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  900-1100/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Full Time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-10">
                              <div className="mo-mb-2">
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  2 - 3 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-1.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    Web Developer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Technology pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Oakridge Lane Richardson
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  1000-1200/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Full Time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-4">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  1 - 2 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">Notes :</span>{" "}
                                  languages only differ in their grammar.{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-4.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    UI/UX Designer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Themes pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Pinewood Drive Chicago
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  1000-1200/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Freelancer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-4">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  1 - 2 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">Notes :</span>{" "}
                                  languages only differ in their grammar.{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-3.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    Graphic Designer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Technology pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Sumner Street Anaheim
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  800-1000/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Part Time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-4">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  0 - 1 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">Notes :</span>{" "}
                                  languages only differ in their grammar.{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="part-job"
                  role="tabpanel"
                  aria-labelledby="part-job-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-1.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    Web Developer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Technology pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Oakridge Lane Richardson
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  1000-1200/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Full Time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-4">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  1 - 2 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">Notes :</span>{" "}
                                  languages only differ in their grammar.{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-2.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    Php Developer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Themes pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Berkshire Circle Knoxville
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  900-1100/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Full Time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-10">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  2 - 3 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-3.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    Graphic Designer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Technology pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Sumner Street Anaheim
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  800-1000/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Part Time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-4">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  0 - 1 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">Notes :</span>{" "}
                                  languages only differ in their grammar.{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-4.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    UI/UX Designer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Themes pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Pinewood Drive Chicago
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  1000-1200/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Freelancer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-4">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  1 - 2 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">Notes :</span>{" "}
                                  languages only differ in their grammar.{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="full-job"
                  role="tabpanel"
                  aria-labelledby="full-job-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-2.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    Php Developer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Themes pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Berkshire Circle Knoxville
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  900-1100/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Full Time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-10">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  2 - 3 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-1.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    Web Developer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Technology pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Oakridge Lane Richardson
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  1000-1200/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Full Time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-4">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  1 - 2 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">Notes :</span>{" "}
                                  languages only differ in their grammar.{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-4.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    UI/UX Designer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Themes pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Pinewood Drive Chicago
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  1000-1200/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Freelancer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-4">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  1 - 2 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">Notes :</span>{" "}
                                  languages only differ in their grammar.{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                        <div className="lable text-center pt-2 pb-2">
                          <ul className="list-unstyled best text-white mb-0 text-uppercase">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <div className="mo-mb-2">
                                <img
                                  src="images/featured-job/img-3.png"
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <h5 className="f-18">
                                  <a href="#" className="text-dark">
                                    Graphic Designer
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Web Technology pvt.Ltd
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <p className="text-muted mb-0">
                                  <i className="mdi mdi-map-marker text-primary mr-2" />
                                  Sumner Street Anaheim
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-primary">$</span>
                                  800-1000/m
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <p className="text-muted mb-0">Part Time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-light">
                          <div className="row">
                            <div className="col-md-4">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">
                                    Experience :
                                  </span>{" "}
                                  0 - 1 years
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <p className="text-muted mb-0 mo-mb-2">
                                  <span className="text-dark">Notes :</span>{" "}
                                  languages only differ in their grammar.{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div>
                                <a href="#" className="text-primary">
                                  Apply Now{" "}
                                  <i className="mdi mdi-chevron-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
          {/* end row */}
          <div className="row">
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
                      <i className="mdi mdi-chevron-double-left f-15" />
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
                      <i className="mdi mdi-chevron-double-right f-15" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListJobHome;
