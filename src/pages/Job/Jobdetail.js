import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
function Jobdetail() {
  const { job_id } = useParams();
  const [cookies, setCookie] = useCookies(["user"]);
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/job/${job_id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data.data);
        console.log("check>>", data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [pdf, setPdf] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // get the file
    const file = document.getElementById("file").files[0];
    const formData = new FormData();
    formData.append("cv_file", file);
    // random 1 - 5
    const random = Math.floor(Math.random() * 5) + 1;
    // job_id
    formData.append("job_id", random);
    fetch(
      `${process.env.REACT_APP_API_URL}/candidate/job/upload?api_token=${cookies.user}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        cookies.user ? toast.success(data.message) : toast.error(data.message);
        console.log("check", data);
        /*{
          success: true or false,
          cv_score: x/y,
          cv_pass: 1 or 0
        }*/
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="text-dark mb-3">Job Detail</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="job-detail border rounded p-4">
                <div className="job-detail-content">
                  <img
                    src="images/featured-job/img-4.png"
                    alt=""
                    className="img-fluid float-left mr-md-3 mr-2 mx-auto d-block"
                  />
                  <div className="job-detail-com-desc overflow-hidden d-block">
                    <h4 className="mb-2">
                      <a href="#" className="text-dark">
                        {job.job_title}
                      </a>
                    </h4>
                    <p className="text-muted mb-0">
                      <i className="mdi mdi-link-variant mr-2" />
                      {job.company_name}
                    </p>
                    <p className="text-muted mb-0">
                      <i className="mdi mdi-map-marker mr-2" />
                      {job.job_place}
                    </p>
                  </div>
                </div>
                <div className="job-detail-desc mt-4">
                  <p className="text-muted mb-3">
                    Neque porro quisquam est qui dolorem ipsum dolor sit amet
                    consectetur adipisci velit a quia non eius modi tempora
                    incidunt ut labore dolore magnam aliquam quaerat voluptatem
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit
                    aut fugit sed quia consequuntur magni dolores eose.
                  </p>
                  <p className="text-muted mb-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praelsentium voluptatum at deleniti atque
                    corrupti quos dolores quas molestias excepturi occaecati
                    cupiditate non provident, similique sunt culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga
                    Temporibus autem quibusdam aut Ut at as enim ad minima
                    veniam quis nostrum that exercitationem ullam corporis
                    suscipit laboriosam officiis debitis aut rerum
                    necessitatibus.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="text-dark mt-4">Job Description :</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="job-detail border rounded mt-2 p-4">
                    <div className="job-detail-desc">
                      <p className="text-muted mb-3">{job.job_descrip}</p>
                      <p className="text-muted mb-0">
                        Itaque earum rerum hic tenetur sapiente delectus aut
                        reiciendis voluptatibus maiores that alias consequatur
                        aut perferendis doloribus asperiores repellat Sed ut
                        perspiciatis unde omnis iste sit at natus error sit
                        voluptatem accusantium doloremque laudantium niti totame
                        rem aperiam eaque ipsa quae ab illo inventore veritatis
                        et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="text-dark mt-4">Qualification :</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="job-detail border rounded mt-2 p-4">
                    <div className="job-detail-desc">
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">
                          Morbi mattis ullamcorper velit. Phasellus gravida
                          semper nisi nullam vel sem.
                        </p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">
                          Phasellus viverra nulla ut metus varius laoreet.
                          Quisque rutrum. Aenean imperdiet.
                        </p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">
                          Etiam ultricies nisi vel augue. Curabitur ullamcorper
                          ultricies nisi. Nam eget dui. Etiam rhoncus.
                        </p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">
                          Donec mollis hendrerit risus. Phasellus nec sem in
                          justo pellentesque facilisis.
                        </p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">
                          Praesent congue erat at massa. Sed cursus turpis vitae
                          tortor. Donec posuere vulputate arcu.
                        </p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">
                          Donec elit libero, sodales nec, volutpat a, suscipit
                          non, turpis. Nullam sagittis.
                        </p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">
                          Pellentesque auctor neque nec urna. Proin sapien
                          ipsum, porta a, auctor quis, euismod ut, mi.
                        </p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-0">
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="text-dark mt-4">Primary Responsibilities :</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="job-detail border rounded mt-2 p-4">
                    <div className="job-detail-desc">
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">HTML, CSS &amp; Scss</p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">Javascript</p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">PHP</p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-2">Photoshop</p>
                      </div>
                      <div className="job-details-desc-item">
                        <div className="float-left mr-3">
                          <i className="mdi mdi-send text-primary" />
                        </div>
                        <p className="text-muted mb-0">Illustrator</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 mt-4 mt-sm-0">
              <div className="job-detail border rounded p-4">
                <h5 className="text-muted text-center pb-2">
                  <i className="mdi mdi-map-marker mr-2" />
                  Location
                </h5>
                <div className="job-detail-location pt-4 border-top">
                  <div className="job-details-desc-item">
                    <div className="float-left mr-2">
                      <i className="mdi mdi-bank text-muted" />
                    </div>
                    <p className="text-muted mb-2">: {job.company_name}</p>
                  </div>
                  <div className="job-details-desc-item">
                    <div className="float-left mr-2">
                      <i className="mdi mdi-email text-muted" />
                    </div>
                    <p className="text-muted mb-2">: duongngocdo@gmail.com</p>
                  </div>
                  <div className="job-details-desc-item">
                    <div className="float-left mr-2">
                      <i className="mdi mdi-web text-muted" />
                    </div>
                    <p className="text-muted mb-2">: https://www.google.com</p>
                  </div>
                  <div className="job-details-desc-item">
                    <div className="float-left mr-2">
                      <i className="mdi mdi-cellphone-iphone text-muted" />
                    </div>
                    <p className="text-muted mb-2">: 0966529474</p>
                  </div>
                  <div className="job-details-desc-item">
                    <div className="float-left mr-2">
                      <i className="mdi mdi-currency-usd text-muted" />
                    </div>
                    <p className="text-muted mb-2">: $ {job.salary}</p>
                  </div>
                  <div className="job-details-desc-item">
                    <div className="float-left mr-2">
                      <i className="mdi mdi-security text-muted" />
                    </div>
                    <p className="text-muted mb-2">: 1 To 3 Years.</p>
                  </div>
                  <div className="job-details-desc-item">
                    <div className="float-left mr-2">
                      <i className="mdi mdi-clock-outline text-muted" />
                    </div>
                    <p className="text-muted mb-2">: {job.updated_at}</p>
                  </div>
                  <h6 className="text-dark f-17 mt-3 mb-0">Share Job :</h6>
                  <ul className="social-icon list-inline mt-3 mb-0">
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
                        <i className="mdi mdi-google-plus" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="rounded">
                        <i className="mdi mdi-whatsapp" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="rounded">
                        <i className="mdi mdi-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="job-detail border rounded mt-4 p-4">
                <h5 className="text-muted text-center pb-2">
                  <i className="mdi mdi-clock-outline mr-2" />
                  Opening Hours
                </h5>
                <div className="job-detail-time border-top pt-4">
                  <ul className="list-inline mb-0">
                    <li className="clearfix text-muted border-bottom pb-3">
                      <div className="float-left">Monday</div>
                      <div className="float-right">
                        <h5 className="f-13 mb-0">9AM - 7PM</h5>
                      </div>
                    </li>
                    <li className="clearfix text-muted border-bottom pb-3">
                      <div className="float-left">Tuesday</div>
                      <div className="float-right">
                        <h5 className="f-13 mb-0">9AM - 7PM</h5>
                      </div>
                    </li>
                    <li className="clearfix text-muted border-bottom pb-3">
                      <div className="float-left">Wednesday</div>
                      <div className="float-right">
                        <h5 className="f-13 mb-0">9AM - 7PM</h5>
                      </div>
                    </li>
                    <li className="clearfix text-muted border-bottom pb-3">
                      <div className="float-left">Thursday</div>
                      <div className="float-right">
                        <h5 className="f-13 mb-0">9AM - 7PM</h5>
                      </div>
                    </li>
                    <li className="clearfix text-muted border-bottom pb-3">
                      <div className="float-left">Friday</div>
                      <div className="float-right">
                        <h5 className="f-13 mb-0">9AM - 7PM</h5>
                      </div>
                    </li>
                    <li className="clearfix text-muted border-bottom pb-3">
                      <div className="float-left">Saturday</div>
                      <div className="float-right">
                        <h5 className="f-13 mb-0">6:30AM - 1PM</h5>
                      </div>
                    </li>
                    <li className="clearfix text-muted pb-0">
                      <div className="float-left">Sunday</div>
                      <div className="float-right">
                        <h5 className="f-13 mb-0">Closed</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="job-detail border rounded mt-4"
              >
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="btn btn-primary btn-block"
                />
                <button className="btn btn-primary btn-block">
                  Apply For Job
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jobdetail;
