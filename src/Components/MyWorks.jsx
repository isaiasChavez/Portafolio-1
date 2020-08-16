import React, { Fragment } from "react";
import img from "../img/jesus.jpg";
import Fade from "react-reveal/Fade";

const MyWorks = ({ id }) => {
  return (
    <Fragment>
      <div className="container bg-dark mb-5 pb-5 " id={id}>
        <div className="row bg-dark d-flex flex-column">
          <Fade>
            <div className="d-flex flex-column align-items-center bg-dark  pb-5 pt-5 ">
              <h2 className=" w-100 pl-2 display-3 text-white pt-5">
                My Works
              </h2>
              <p className="card-text p-2 m-0 pl-0 text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis poloremque mollitia soluta vero
              </p>
              <div
                class="btn-group align-self-start ml-2"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-dark w-100">
                  Left
                </button>
                <button type="button" class="btn btn-dark w-100">
                  Middle
                </button>
                <button type="button" class="btn btn-dark w-100">
                  Right
                </button>
              </div>
            </div>
          </Fade>

          <div class="container mt-5 mb-5 ">
            <div class="row  row-cols-1 row-cols-md-2  mt-lg-3">
              <Fade left>
                <img
                  className="img-fluid py-lg-3 mt-3 col div-works "
                  src={img}
                  alt=""
                />
              </Fade>
              <Fade right>
                <img
                  className="img-fluid  py-lg-3 mt-3  col div-works "
                  src={img}
                  alt=""
                />
              </Fade>
              <Fade left>
                <img
                  className="img-fluid py-lg-3 col mt-3 div-works"
                  src={img}
                  alt=""
                />
              </Fade>
              <Fade right>
                <img
                  className="img-fluid py-lg-3 col mt-3 div-works "
                  src={img}
                  alt=""
                />
              </Fade>
              <Fade left>
                <img
                  className="img-fluid py-lg-3 col mt-3 div-works"
                  src={img}
                  alt=""
                />
              </Fade>
              <Fade right>
                <img
                  className="img-fluid py-lg-3 col mt-3 div-works "
                  src={img}
                  alt=""
                />
              </Fade>
            </div>
            <div class="row row-cols-2"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyWorks;
