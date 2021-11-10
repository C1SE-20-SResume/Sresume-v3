import "./App.css";
import LayoutHomeMain from "./routes/LayoutHomeMain";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import LayoutHeader from "./routes/HeaderLayout/LayoutHeader";
import Listjob from "./pages/Job/Listjob";
import Footer from "./auth/Footer";
import Loginpage from "./pages/Login/Loginpage";

import SignUpPage from "./pages/Login/SignUpPage";
import Jobdetail from "./pages/Job/Jobdetail";

import { useCookies } from "react-cookie";
import ReactToastify from "./pages/Toast/ReactToastify";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  return (
    <>
      <Router>
        <Switch>
          {cookies.user ?? (
            <Route path={["/login", "/SignUp"]}>
              <Switch>
                <Route path="/login">
                  <Loginpage />
                </Route>
                <Route path="/SignUp">
                  <SignUpPage />
                </Route>
              </Switch>
            </Route>
          )}

          <Route>
            <LayoutHeader />

            <Switch>
              <Route exact path="/">
                <LayoutHomeMain />
              </Route>
              <Route path="/Job">
                <Listjob />
              </Route>
              <Route path="/job-detail/:job_id">
                <Jobdetail />
              </Route>
              <Route path="*">
                <LayoutHomeMain />
              </Route>
            </Switch>

            <Footer />
          </Route>
        </Switch>
        <ReactToastify />
      </Router>
    </>
  );
}

export default App;
