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
    name: "Engraved Signs",
    image: signImg01, // Replace with actual image import
    link: "/engraved-signs",
  },
  {
    name: "Laser Engraved Plaques and Awards",
    image: signImg02, // Replace with actual image import
    link: "/laser-engraved-plaques",
  },
  {
    name: "Laser Engraved Metal",
    image: signImg03, // Replace with actual image import
    link: "/laser-engraved-metal",
  },
  {
    name: "Laser Engraved Wooden",
    image: signImg04, // Replace with actual image import
    link: "/laser-engraved-wooden",
  },
  {
    name: "Laser Engraved Plastic",
    image: signImg01, // Replace with actual image import
    link: "/laser-engraved-plastic",
  },
  {
    name: "Custom Promotional Products",
    image: signImg02, // Replace with actual image import
    link: "/custom-promotional-products",
  },
];

const LaserEngraving = () => {
  return (
    <>
      <SubCategoryHeader
        title="Laser Engraving"
        description="Our Laser Engraving signs are built to withstand weather conditions while maintaining a professional look."
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

export default LaserEngraving;
