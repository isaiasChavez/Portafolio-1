import React from "react";

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
          <div class="collapse navbar-collapse offset-md-5 offset-lg-7 offset-sm-1  border-bottom " id="navbarNav">
            <ul class="navbar-nav  ">
              <li class="nav-item active">
                <a class="nav-link pb-3" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  pb-3" href="#">
                  About
                </a>
              </li>

              <li class="nav-item ">
                <a
                  class="nav-link  pb-3"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  href="#"
                >
                  Services
                </a>
              </li>

              <li class="nav-item ">
                <a
                  class="nav-link  pb-3"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item ">
                <a
                  class="nav-link  pb-3"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
