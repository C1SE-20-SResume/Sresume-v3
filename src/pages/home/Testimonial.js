import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title title-line pb-5">Our Success Stories</h4>
                  <p className="text-muted para-desc mx-auto mb-1">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-lg-12">
                <div id="owl-testi" className="owl-carousel owl-theme">
                  <div className="item testi-box rounded p-4 mr-3 ml-2 mb-4 bg-light position-relative">
                    <p className="text-muted mb-5">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet consecteturqui adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam
                    </p>
                    <div className="clearfix">
                      <div className="testi-img float-left mr-3">
                        <img
                          src="./images/user1.png"
                          height={64}
                          alt=""
                          className="rounded-circle shadow"
                        />
                      </div>
                      <h5 className="f-18 pt-1">Kevin Stewart</h5>
                      <p className="text-muted mb-0">
                        Web Designer at xyz Company
                      </p>
                      <div className="testi-icon">
                        <i className="mdi mdi-format-quote-open display-2" />
                      </div>
                    </div>
                  </div>
                  <div className="item testi-box rounded p-4 mr-3 ml-2 bg-light position-relative">
                    <p className="text-muted mb-5">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo
                    </p>
                    <div className="clearfix">
                      <div className="testi-img float-left mr-3">
                        <img
                          src="./images/user2.png"
                          height={64}
                          alt=""
                          className="rounded-circle shadow"
                        />
                      </div>
                      <h5 className="f-18 pt-1">Charles Garrett</h5>
                      <p className="text-muted mb-0">
                        Marketing manager at abc Company
                      </p>
                      <div className="testi-icon">
                        <i className="mdi mdi-format-quote-open display-2" />
                      </div>
                    </div>
                  </div>
                  <div className="item testi-box rounded p-4 mr-3 ml-2 bg-light position-relative">
                    <p className="text-muted mb-5">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet consecteturqui adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam
                    </p>
                    <div className="clearfix">
                      <div className="testi-img float-left mr-3">
                        <img
                          src="./images/user3.png"
                          height={64}
                          alt=""
                          className="rounded-circle shadow"
                        />
                      </div>
                      <h5 className="f-18 pt-1">Perry Martinez</h5>
                      <p className="text-muted mb-0">
                        Marketing manager at abc Company
                      </p>
                      <div className="testi-icon">
                        <i className="mdi mdi-format-quote-open display-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title title-line pb-5">Our Client's</h4>
                  <p className="text-muted para-desc mx-auto mb-1">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                <img
                  src="data:image/png;base64,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"
                  height={50}
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                <img
                  src="https://www.logitech.com/content/dam/logitech/vc/en/rightsense/logos/microsoft.png.imgo.png"
                  height={50}
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                <img
                  src="https://cdn.huongnghiepaau.com/wp-content/uploads/2019/08/sap-la-gi-1.jpg"
                  height={50}
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                <img
                  src="data:image/png;base64,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"
                  height={50}
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                <img
                  src="https://blog.itnavi.com.vn/uploads/2020/04/oracle-la-gi.png"
                  height={50}
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                <img
                  src="https://mms.businesswire.com/media/20210414005849/en/782362/22/4284573_300DPIxVMware-logo-grey_highres.jpg"
                  height={50}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Testimonial;
