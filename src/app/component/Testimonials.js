"use client";

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "ALBERT WISDOM",
      image: "./img.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "SARA SMITH",
      image: "./img.png",
      text: "Curabitur vitae arcu non eros convallis tristique sed nec erat."
    },
    {
      name: "JAMES DOE",
      image: "./img.png",
      text: "Vivamus rutrum, mi in laoreet sollicitudin, purus lacus tincidunt."
    },
    // Add more testimonials if needed
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // we’re using custom buttons
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="testimonial-section" className="padding">
      <div className="services-title">
        <h4></h4>
        <h1>What Our <span> Clients Says</span> About The Service</h1>
        <h2>Review</h2>
      </div>
    <div className="testimonial-main">
      {/* Custom Buttons */}
      <div className="slider-buttons" >
        <button onClick={() => sliderRef.current?.slickPrev()}>&larr;</button>
 
      </div>

      <Slider {...settings} ref={sliderRef} className="testimonial-main">
        {testimonials.map((item, index) => (
          <div key={index} className="card">
            <div className="des">
              <p>{item.text}</p>
            </div>
            <div className="card-detail">
              <div className="card-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="clint-name">
                <p>- {item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="slider-buttons" >
        
        <button onClick={() => sliderRef.current?.slickNext()}> &rarr;</button>
      </div>

      </div>
      <div className="slide-btn">
      <div className="slide-button" >
        <button onClick={() => sliderRef.current?.slickPrev()}>&larr;</button>
        <button onClick={() => sliderRef.current?.slickNext()}> &rarr;</button>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
