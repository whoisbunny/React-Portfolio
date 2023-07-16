import React from "react";
import "./testimonials.css";
import AVTR2 from "../../assets/avatar2.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
const data = [
  {
    id: 1,
    avtar: AVTR2,
    name: "Client1",
    review: "This is the demo of the client review of my work",
  },
  { id: 2, avtar: AVTR2, name: "Client2", review: " - " },
  { id: 3, avtar: AVTR2, name: "Client3", review: " - " },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2> Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ name, avtar, review , id } , index) => {
          console.log(id);
          return (
            <>
              <SwiperSlide className="testimonial" key={index} >
                <div className="client__avatar">
                  <img src={avtar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
