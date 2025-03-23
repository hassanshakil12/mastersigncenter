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
    name: "Custom Promotional Products",
    image: signImg01, // Replace with actual image import
    link: "/custom-promotional-products",
  },
  {
    name: "Custom Trophies, Awards, and Plaques",
    image: signImg02,
    link: "/custom-trophies-awards-plaques",
  },
  {
    name: "Bumper Stickers",
    image: signImg03,
    link: "/bumper-stickers",
  },
  {
    name: "Stickers for Promotional Campaigns",
    image: signImg04,
    link: "/stickers-promotional-campaigns",
  },
  {
    name: "Promotional Bags and Totes",
    image: signImg01,
    link: "/promotional-bags-totes",
  },
  {
    name: "Wearables",
    image: signImg02,
    link: "/wearables",
  },
];

const Promo = () => {
  return (
    <>
      <SubCategoryHeader
        title="Promo Signs"
        description="Our Promo signs are built to withstand weather conditions while maintaining a professional look."
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

export default Promo;
