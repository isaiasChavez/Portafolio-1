import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({ setpaginaEnPrincipal }) => {
  return (
    <>
      <div className="row">
        <nav
          class="navbar navbar-expand-sm col navbar-dark bg-dark fixed-top "
          data-toggle="collapse"
        >
          <a class="navbar-brand" href="#">
            <p className="display-5">JUAN PABLO</p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse offset-md-5 offset-lg-7 offset-sm-1  border-bottom "
            id="navbarNav"
          >
            <ul class="navbar-nav  ">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a class="nav-link pb-3" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a class="nav-link  pb-3" href="#">
                  About
                </a>
              </Link>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a class="nav-link  pb-3" href="#">
                  Services
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
                  class="nav-link  pb-3"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  href="#"
                >
                  Portfolio
                </a>
              </Link>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a
                  class="nav-link  pb-3"
                  href="#"
                >
                  Contact
                </a>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
