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
    name: "Yard Signs",
    image: signImg01, // Replace with actual image import
    link: "/yard-signs",
  },
  {
    name: "Real Estate Signs",
    image: signImg02,
    link: "/real-estate-signs",
  },
  {
    name: "Pylon Signs",
    image: signImg03,
    link: "/pylon-signs",
  },
  {
    name: "Monument Signs",
    image: signImg04,
    link: "/monument-signs",
  },
  {
    name: "Outdoor Banners",
    image: signImg01,
    link: "/outdoor-banners",
  },
  {
    name: "Temporary Outdoor Signage",
    image: signImg02,
    link: "/temporary-outdoor-signage",
  },
  {
    name: "Reflective Signs for Outdoor Visibility",
    image: signImg03,
    link: "/reflective-signs-outdoor",
  },
  {
    name: "Building Signage",
    image: signImg04,
    link: "/building-signage",
  },
  {
    name: "Post and Panel Signs",
    image: signImg01,
    link: "/post-panel-signs",
  },
  {
    name: "Event Signage for Outdoor Promotions",
    image: signImg02,
    link: "/event-signage-outdoor",
  },
];

const OutdoorSigns = () => {
  return (
    <>
      <SubCategoryHeader
        title="Outdoor Signs"
        description="Our Outdoor Signs are built to withstand weather conditions while maintaining a professional look."
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

export default OutdoorSigns;
