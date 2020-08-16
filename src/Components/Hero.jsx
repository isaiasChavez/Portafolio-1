import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = ({ id }) => {
  return (
    <div className="row pb-5 " id={id}>
      <div class="card w-100 min-vh-100 bg-dark d-flex justify-content-center align-items-center rounded-0 border-0">
        <div class="card-body h-100  d-flex justify-content-center flex-column">
          <h5 class="display-3 text-center font-weight-bold text-white">
            Juan Pablo
          </h5>
          <p class="card-text text-center lead text-white">
            Software Developer
          </p>
          <div className=" d-flex justify-content-around">
          <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a
                  class="nav-link btn btn-outline-light btn-lg mt-5 py-3 px-4"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  href="#"
                >
                  About
                </a>
              </Link>
            <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a
                  class="nav-link btn btn-outline-light btn-lg mt-5 py-3 px-4"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  href="#"
                >
                  Portfolio
                </a>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
