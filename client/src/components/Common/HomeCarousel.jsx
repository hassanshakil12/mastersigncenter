import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./css/HomeCarousel.css"; // Custom CSS
import img1 from "../../assets/carousel01.jpg";
import img2 from "../../assets/carousel02.jpg";
import img3 from "../../assets/carousel03.jpg";

const HomeCarousel = () => {
  const slides = [
    {
      id: 1,
      image: img1,
      title: "High-Quality Signs",
      text: "Custom signage solutions for your business.",
    },
    {
      id: 2,
      image: img2,
      title: "Professional Branding",
      text: "Make your brand stand out with our designs.",
    },
    {
      id: 3,
      image: img3,
      title: "Expert Craftsmanship",
      text: "We deliver excellence in every detail.",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect="fade"
      loop
      className="home-carousel"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="carousel-content">
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel-image"
            />
            <div className="carousel-overlay">
              <div className="carousel-overlay-text">
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                <div className="carousel-menu">
                  <Link to="/contact" className="carousel-btn">
                    Get Started
                  </Link>
                  <Link to="/login" className="carousel-btn">
                    Call for Design Help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;
