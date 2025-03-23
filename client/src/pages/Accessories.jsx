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
    name: "Mounting Hardware for Signs and Banners",
    image: signImg01, // Replace with actual image import
    link: "/mounting-hardware",
  },
  {
    name: "Frames",
    image: signImg02,
    link: "/frames",
  },
  {
    name: "Display Stands",
    image: signImg03,
    link: "/display-stands",
  },
  {
    name: "Flag Poles and Accessories",
    image: signImg04,
    link: "/flag-poles-accessories",
  },
  {
    name: "Pole Banners",
    image: signImg01,
    link: "/pole-banners",
  },
  {
    name: "Custom Display Accessories",
    image: signImg02,
    link: "/custom-display-accessories",
  },
  {
    name: "Poster Holders",
    image: signImg03,
    link: "/poster-holders",
  },
];

const Accessories = () => {
  return (
    <>
      <SubCategoryHeader
        title="Accessories"
        description="Our Accessories are built to withstand weather conditions while maintaining a professional look."
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

export default Accessories;
