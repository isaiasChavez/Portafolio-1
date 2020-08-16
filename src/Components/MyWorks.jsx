import React, { Fragment } from "react";
import img from '../img/jesus.jpg'
import Fade from 'react-reveal/Fade';

const MyWorks = () => {
  return (
    <Fragment>
      <div className="container bg-dark mb-5 pb-5">
        <div className="row bg-dark d-flex flex-column">
          <div className="d-flex flex-column align-items-center bg-dark  pb-5 pt-5 ">
            <h2 className=" w-100 pl-2 display-3 text-white pt-5">My Works</h2>
            <p className="card-text p-2 m-0 pl-0 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              poloremque mollitia soluta vero
            </p>
            <div class="btn-group align-self-start ml-2" role="group" aria-label="Basic example">
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

          <div className="col d-flex flex-wrap justify-content-center">
              <Fade>
              <img className='img-fluid  w-50  m-1' src={img} alt=""/>
              <img className='img-fluid w-50  m-1' src={img} alt=""/>
              <img className='img-fluid w-50  m-1' src={img} alt=""/>
              <img className='img-fluid w-50  m-1' src={img} alt=""/>
              </Fade>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyWorks;
