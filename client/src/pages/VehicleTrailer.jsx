import React from "react";
import {
  SubCategoryHeader,
  ClientReviews,
  FAQ,
  SignsCategoryGrid,
  SignPriceCalculator,
} from "../components";
import signImg from "../assets/sign-category.jpg";
import signImg01 from "../assets/sign-img01.jpeg";
import signImg02 from "../assets/sign-img02.jpeg";
import signImg03 from "../assets/sign-img03.jpeg";
import signImg04 from "../assets/sign-img04.jpeg";

const categories = [
  {
    name: "Vehicle Graphics and Wraps",
    image: signImg01, // Replace with actual image import
    link: "/vehicle-graphics-wraps",
  },
  {
    name: "Custom Vehicle Magnets",
    image: signImg02,
    link: "/custom-vehicle-magnets",
  },
  {
    name: "Vehicle Decals",
    image: signImg03,
    link: "/vehicle-decals",
  },
  {
    name: "Trailer Graphics and Decals",
    image: signImg04,
    link: "/trailer-graphics-decals",
  },
  {
    name: "Vehicle Wraps for Advertising",
    image: signImg01,
    link: "/vehicle-wraps-advertising",
  },
];

const VehicleTrailer = () => {
  return (
    <>
      <SubCategoryHeader
        title="Vehicle & Trailer"
        description="Our Vehicle & Trailer Signs are built to withstand weather conditions while maintaining a professional look."
        image={signImg}
        points={[
          "Weather-resistant materials",
          "Customizable designs",
          "Durable and long-lasting",
          "Suitable for all industries",
          "Eco-friendly options available",
        ]}
        rating={4.5}
      />
      <div>
        <SignsCategoryGrid categories={categories} />
      </div>
      <SignPriceCalculator />
      <ClientReviews />
      <FAQ />
    </>
  );
};

export default VehicleTrailer;
