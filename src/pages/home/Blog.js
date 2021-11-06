import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <>
        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title title-line pb-5">Career advice</h4>
                  <p className="text-muted para-desc mx-auto mb-1">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="blog position-relative overflow-hidden shadow rounded">
                  <div className="position-relative overflow-hidden">
                    <img
                      src="https://wiki.tino.org/wp-content/uploads/2020/10/reactjs-la-gi2-750x422.jpg"
                      className="img-fluid rounded-top"
                      alt=""
                    />
                    <div className="overlay rounded-top bg-dark" />
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item mr-2">
                          <a
                            href="javascript:void(0)"
                            className="text-white like"
                          >
                            <i className="mdi mdi-heart-outline mr-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="javascript:void(0)"
                            className="text-white comments"
                          >
                            <i className="mdi mdi-comment-outline mr-1" />
                            08
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content p-4">
                    <h4>
                      <a href="javascript:void(0)" className="title text-dark">
                        How apps is the IT world
                      </a>
                    </h4>
                    <p className="text-muted">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium, totam rem aperiam
                    </p>
                    <a href="#" className="text-dark readmore">
                      Read more <i className="mdi mdi-chevron-right" />
                    </a>
                  </div>
                  <div className="author">
                    <p className=" mb-0">
                      <i className="mdi mdi-account text-light" />{" "}
                      <a href="javascript:void(0)" className="text-light user">
                        Dirio Walls
                      </a>
                    </p>
                    <p className="text-light mb-0 date">
                      <i className="mdi mdi-calendar-check" /> 25 Sep, 2019
                    </p>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="blog position-relative overflow-hidden shadow rounded">
                  <div className="position-relative overflow-hidden">
                    <img
                      src="https://wiki.tino.org/wp-content/uploads/2020/10/reactjs-la-gi2-750x422.jpg"
                      className="img-fluid rounded-top"
                      alt=""
                    />
                    <div className="overlay rounded-top bg-dark" />
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item mr-2">
                          <a
                            href="javascript:void(0)"
                            className="text-white like"
                          >
                            <i className="mdi mdi-heart-outline mr-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="javascript:void(0)"
                            className="text-white comments"
                          >
                            <i className="mdi mdi-comment-outline mr-1" />
                            08
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content p-4">
                    <h4>
                      <a href="javascript:void(0)" className="title text-dark">
                        Vestibulum ante ipsum primis
                      </a>
                    </h4>
                    <p className="text-muted">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium, totam rem aperiam
                    </p>
                    <a href="#" className="text-dark readmore">
                      Read more <i className="mdi mdi-chevron-right" />
                    </a>
                  </div>
                  <div className="author">
                    <p className=" mb-0">
                      <i className="mdi mdi-account text-light" />{" "}
                      <a href="javascript:void(0)" className="text-light user">
                        Dirio Walls
                      </a>
                    </p>
                    <p className="text-light mb-0 date">
                      <i className="mdi mdi-calendar-check" /> 25 Sep, 2019
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="blog position-relative overflow-hidden shadow rounded">
                  <div className="position-relative overflow-hidden">
                    <img
                      src="https://wiki.tino.org/wp-content/uploads/2020/10/reactjs-la-gi2-750x422.jpg"
                      className="img-fluid rounded-top"
                      alt=""
                    />
                    <div className="overlay rounded-top bg-dark" />
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item mr-2">
                          <a
                            href="javascript:void(0)"
                            className="text-white like"
                          >
                            <i className="mdi mdi-heart-outline mr-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="javascript:void(0)"
                            className="text-white comments"
                          >
                            <i className="mdi mdi-comment-outline mr-1" />
                            08
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content p-4">
                    <h4>
                      <a href="javascript:void(0)" className="title text-dark">
                        Maecenas tempus tellus eget
                      </a>
                    </h4>
                    <p className="text-muted">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium, totam rem aperiam
                    </p>
                    <a href="#" className="text-dark readmore">
                      Read more <i className="mdi mdi-chevron-right" />
                    </a>
                  </div>
                  <div className="author">
                    <p className=" mb-0">
                      <i className="mdi mdi-account text-light" />{" "}
                      <a href="javascript:void(0)" className="text-light user">
                        Dirio Walls
                      </a>
                    </p>
                    <p className="text-light mb-0 date">
                      <i className="mdi mdi-calendar-check" /> 25 Sep, 2019
                    </p>
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Blog;
