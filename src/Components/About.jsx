import React, { Fragment } from "react";
import img from "../img/juan.png";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
const About = () => {
  return (
    <Fragment>
      
        <div className="d-flex col-sm-12 flex-wrap align-items-center bg-dark min-vh-100 pb-5">
          <div className="d-flex col-lg-5  justify-content-center">
            <Zoom >

            <img className="img-fluid w-100 img-about " src={img} alt="" />
            </Zoom>
          </div>

          <div className=' col-lg-7 d-flex align-items-center flex-column'>
            <h2 className="bg-dark  pl-5 display-3 text-white">About</h2>

            <p className="card-text p-4 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              porro sint perspiciatis n Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Nobis dolorem sint doloremque mollitia soluta
              vero repellat debitis. Hic, illum provident? bis? Vero officia
              repudiandae impedit voluptatem reprehenderit quisquam perferendis
              tempora obcaecati. Sunt ducimus vero saepe officia quibusdam
              dolores.
            </p>
          </div>
        </div>
        <div className="d-flex col-sm-12 col-lg-10 offset-lg-1 min-vh-100 justify-content-center flex-column align-items-center bg-dark pb-5 ">
          <Fade>
            <h2 className="bg-dark w-100 pl-4 display-5 text-white">
              Lets Colaborate
            </h2>
            <p className="card-text p-4 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              porro sint perspiciatis n Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Nobis dolorem sint doloremque mollitia soluta
              vero repellat debitis. Hic, illum provident? bis? Vero officia
              repudiandae impedit voluptatem reprehenderit quisquam perferendis
              tempora obcaecati. Sunt ducimus vero saepe officia quibusdam
              dolores.
            </p>
          </Fade>
          <button className="btn btn-outline-light btn-lg align-self-start ml-4">
            Puchame
          </button>
        </div>
      
    </Fragment>
  );
};

export default About;
