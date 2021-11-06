import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <>
        <section
          className="section bg-counter position-relative"
          style={{
            background:
              'url("https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center center',
          }}
        >
          <div className="bg-overlay bg-overlay-gradient" />
          <div className="container">
            <div className="row" id="counter">
              <div className="col-md-3 col-6">
                <div className="home-counter pt-4 pb-4">
                  <div className="float-left counter-icon mr-3">
                    <i className="mdi mdi-bank h1 text-white" />
                  </div>
                  <div className="counter-content overflow-hidden">
                    <h1
                      className="counter-value text-white mb-1"
                      data-count={120}
                    >
                      10
                    </h1>
                    <p className="counter-name text-white text-uppercase mb-0">
                      Companies
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="home-counter pt-4 pb-4">
                  <div className="float-left counter-icon mr-3">
                    <i className="mdi mdi-file-document-box h1 text-white" />
                  </div>
                  <div className="counter-content overflow-hidden">
                    <h1
                      className="counter-value text-white mb-1"
                      data-count={480}
                    >
                      80
                    </h1>
                    <p className="counter-name text-white text-uppercase mb-0">
                      Applications
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="home-counter pt-4 pb-4">
                  <div className="float-left counter-icon mr-3">
                    <i className="mdi mdi-calendar-multiple-check h1 text-white" />
                  </div>
                  <div className="counter-content overflow-hidden">
                    <h1
                      className="counter-value text-white mb-1"
                      data-count={120}
                    >
                      10
                    </h1>
                    <p className="counter-name text-white text-uppercase mb-0">
                      Job Posted
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="home-counter pt-4 pb-4">
                  <div className="float-left counter-icon mr-3">
                    <i className="mdi mdi-account-multiple-plus h1 text-white" />
                  </div>
                  <div className="counter-content overflow-hidden">
                    <h1
                      className="counter-value text-white mb-1"
                      data-count={200}
                    >
                      10
                    </h1>
                    <p className="counter-name text-white text-uppercase mb-0">
                      Member
                    </p>
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

export default Counter;
