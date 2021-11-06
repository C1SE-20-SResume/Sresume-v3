import React, { Component } from "react";

class HowItWork extends Component {
  render() {
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title title-line pb-5">How It Work</h4>
                  <p className="text-muted para-desc mx-auto mb-1">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mt-4 pt-2">
                <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                  <div className="how-it-work-img position-relative rounded-pill mb-3">
                    <img
                      src="images/how-it-work/img-1.png"
                      alt=""
                      className="mx-auto d-block"
                      height={50}
                    />
                  </div>
                  <div>
                    <h5>Register an account</h5>
                    <p className="text-muted">
                      Donec pede justo fringilla vel aliquet nec vulputate eget
                      arcu. In enim justo rhoncus ut a, justo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4 pt-2">
                <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                  <div className="how-it-work-img position-relative rounded-pill mb-3">
                    <img
                      src="images/how-it-work/img-2.png"
                      alt=""
                      className="mx-auto d-block"
                      height={50}
                    />
                  </div>
                  <div>
                    <h5>Search your job</h5>
                    <p className="text-muted">
                      Aliquam lorem ante dapibus in, viverra feugiatquis a
                      tellus. Phasellus viverra nulla ut Quisque rutrum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4 pt-2">
                <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                  <div className="how-it-work-img position-relative rounded-pill mb-3">
                    <img
                      src="images/how-it-work/img-3.png"
                      alt=""
                      className="mx-auto d-block"
                      height={50}
                    />
                  </div>
                  <div>
                    <h5>Apply for job</h5>
                    <p className="text-muted">
                      Nullam dictum felis eu pede mollis pretiumetus Integer
                      tincidunt. Cras dapibus. semper nisi.
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

export default HowItWork;
