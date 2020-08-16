import React from "react";

const Hero = () => {
  return (
    
    <div className="row pb-5 ">
      <div class="card w-100 min-vh-100 bg-dark d-flex justify-content-center align-items-center rounded-0 border-0">
        <div class="card-body h-100  d-flex justify-content-center flex-column">
          <h5 class="display-3 text-center font-weight-bold text-white">
            Juan Pablo
          </h5>
          <p class="card-text text-center lead text-white">
            Software Developer
          </p>
          <div className=" d-flex justify-content-around">
            <a href="#" class="btn btn-outline-light mt-5 mr-3 pt-3 pb-3 w-50 rounded">
              Portfolio
            </a>
            <a href="#" class="btn btn-outline-light mt-5 w-50 pt-3 pb-3 rounded">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
