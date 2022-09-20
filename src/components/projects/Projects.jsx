import React from 'react';
import Data from './Data';
import "./projects.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from 'swiper';


const Projects = () => {
  return (
    <section className="project container section" id="projects">
    <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Projects</span>

    <Swiper className="project__container"
    loop={true}
    grabCursor={true}
        spaceBetween={24} //change {10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 3,  //change{2}
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 4, //change{2}
            spaceBetween: 30,  //change{48}
          },
         
        }}
        modules={[Pagination]}
        >
     {Data.map(({id, image, title, description}) =>{
      return(
        <SwiperSlide className="project__card" key={id}>
        <img src={image} alt="" className="project__img" />
        <h3 className="project__name">{title}</h3>
        <p className="project__description">{description}</p>
        
        </SwiperSlide>
      )


     })}
    </Swiper>
    
    </section>
  )
}

export default Projects