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
    name: "Custom Stickers",
    image: signImg01, // Replace with actual image import
    link: "/custom-stickers",
  },
  {
    name: "Wall Decals",
    image: signImg02, // Replace with actual image import
    link: "/wall-decals",
  },
  {
    name: "Window Decals",
    image: signImg03, // Replace with actual image import
    link: "/window-decals",
  },
  {
    name: "Floor Decals",
    image: signImg04, // Replace with actual image import
    link: "/floor-decals",
  },
  {
    name: "Vinyl Lettering",
    image: signImg01, // Replace with actual image import
    link: "/vinyl-lettering",
  },
  {
    name: "Custom Vinyl Decals and Lettering",
    image: signImg02, // Replace with actual image import
    link: "/custom-vinyl-decals",
  },
  {
    name: "Die-Cut Stickers",
    image: signImg03, // Replace with actual image import
    link: "/die-cut-stickers",
  },
  {
    name: "Vehicle Magnets",
    image: signImg04, // Replace with actual image import
    link: "/vehicle-magnets",
  },
  {
    name: "Custom Magnets",
    image: signImg01, // Replace with actual image import
    link: "/custom-magnets",
  },
];

const DecalStickers = () => {
  return (
    <>
      <SubCategoryHeader
        title="Decals / Stickers"
        description="Our Decals / Stickers signs are built to withstand weather conditions while maintaining a professional look."
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

export default DecalStickers;
