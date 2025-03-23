import React from "react";
import {
  HomeCarousel,
  ImageSlider,
  ClientReviews,
  FAQ,
  SignsGrid,
} from "../components";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <ImageSlider />
      <SignsGrid />
      <ClientReviews />
      <FAQ />
    </>
  );
};

export default Home;
