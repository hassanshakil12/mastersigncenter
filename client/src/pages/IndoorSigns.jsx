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
    name: "Wall Murals and Graphics",
    image: signImg01, // Replace with actual image import
    link: "/wall-murals-graphics",
  },
  {
    name: "Lobby Signs",
    image: signImg02,
    link: "/lobby-signs",
  },
  {
    name: "Door Signs",
    image: signImg03,
    link: "/door-signs",
  },
  {
    name: "Floor Graphics",
    image: signImg04,
    link: "/floor-graphics",
  },
  {
    name: "Window Graphics and Decals",
    image: signImg01,
    link: "/window-graphics-decals",
  },
  {
    name: "Custom Wall Stickers",
    image: signImg02,
    link: "/custom-wall-stickers",
  },
  {
    name: "Indoor Wayfinding and Directional Signs",
    image: signImg03,
    link: "/indoor-wayfinding-signs",
  },
  {
    name: "Safety Signs for Indoor Spaces",
    image: signImg04,
    link: "/indoor-safety-signs",
  },
  {
    name: "Informational Signs",
    image: signImg01,
    link: "/informational-signs",
  },
];


const IndoorSigns = () => {
  return (
    <>
      <SubCategoryHeader
        title="Indoor Signs"
        description="Our Indoor Signs are built to withstand weather conditions while maintaining a professional look."
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

export default IndoorSigns;
