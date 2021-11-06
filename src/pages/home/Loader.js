import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <>
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <div className="double-bounce1" />
              <div className="double-bounce2" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Loader;
