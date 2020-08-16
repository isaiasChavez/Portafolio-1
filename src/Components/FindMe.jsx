import React, { Fragment } from "react";
import Flash from "react-reveal/Flash";
const FindMe = () => {
  return (
    <Fragment>
      <div className="d-flex flex-column align-items-center">
        <div className="  d-flex flex-column align-items-center">
          <Flash>
            <h3 className="h2 text-uppercase text-white pb-5 text-center"> Find me on</h3>
          </Flash>
        </div>
        <div className="btn-group">
          <button className="btn btn-outline-light btn-sm">Facebook</button>
          <button className="btn btn-outline-light btn-sm">Instagram</button>

          <button className="btn btn-outline-light btn-sm">LinkedIn</button>
          <button className="btn btn-outline-light btn-sm">Behance</button>
        </div>
      </div>
    </Fragment>
  );
};

export default FindMe;
