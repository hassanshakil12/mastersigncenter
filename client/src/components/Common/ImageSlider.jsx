import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./css/ImageSlider.css";
import sliderImage from "../../assets/slider-image.png";

const ImageSlider = () => {
  const images = [
    sliderImage,
    sliderImage,
    sliderImage,
    sliderImage,
    sliderImage,
    sliderImage,
    sliderImage,
    sliderImage,
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="image-slider"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
