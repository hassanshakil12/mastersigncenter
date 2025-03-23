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
    name: "Window Privacy Films",
    image: signImg01, // Replace with actual image import
    link: "/window-privacy-films",
  },
  {
    name: "Security Window Films",
    image: signImg02,
    link: "/security-window-films",
  },
  {
    name: "Decorative Window Films",
    image: signImg03,
    link: "/decorative-window-films",
  },
  {
    name: "Solar Control Films",
    image: signImg04,
    link: "/solar-control-films",
  },
];

const PrivacySecurityFilms = () => {
  return (
    <>
      <SubCategoryHeader
        title="Privacy / Security Films"
        description="Our Privacy / Security Films are built to withstand weather conditions while maintaining a professional look."
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

export default PrivacySecurityFilms;
