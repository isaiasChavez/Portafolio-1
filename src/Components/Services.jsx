import React, { Fragment } from "react";
import Service from "./Service";
import Fade from "react-reveal/Fade";

const Services = ({id}) => {
  return (
    <Fragment>
      <div className="row bg-dark" id={id}>
        <div className="d-flex col-lg-10  offset-1 flex-column align-items-center bg-dark  pb-5 pt-5 ">
          <Fade right>
            <h2 className=" w-100 pl-4 display-3 text-white pt-5">Services</h2>
            <p className="card-text pt-5 pl-4 pb-4 pr-3 m-0  text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              porro sint perspiciatis n Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Nobis dolorem sint doloremque mollitia soluta
              vero
            </p>
          </Fade>
          <button className="btn btn-outline-light btn-lg align-self-start ml-4">
            {" "}
            Puchame
          </button>
        </div>

        <div class="col-sm-12 col-lg-10 offset-lg-1 bg-dark">
          <Fade left>
            <Service />
            <Service />
            <Service />
            <Service />
          </Fade>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
