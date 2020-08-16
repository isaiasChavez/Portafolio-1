import React from "react";
import img from "../img/jesus.jpg";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from 'react-scroll-parallax';
import CarrouselItem from './CarrouselItem'
const Slider = ({informacion}) => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide d-none d-lg-block "
      data-ride="carousel"
      data-touch="true"
      
    >
      <div class="carousel-inner">

      <div class="carousel-item active" data-interval="5000">
          <img src={img} class="d-block w-100   border-bottom" alt="..." />
          <div class="carousel-caption d-none d-md-block  d-flex h-50 ">
              
              <h5 className="h4">
                Una nueva forma de encontrar lo que necesitas
              </h5>
              
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        {informacion.map(info =>(
            <CarrouselItem texto={info.consejo}/>
  ))}
       
        
      </div>


      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
