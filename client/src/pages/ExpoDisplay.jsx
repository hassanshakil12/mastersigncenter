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
    name: "Trade Show Displays",
    image: signImg01,
    link: "/outdoor-signs",
  },
  {
    name: "Banner Stands",
    image: signImg02,
    link: "/indoor-signs",
  },
  {
    name: "Custom Table Covers",
    image: signImg03,
    link: "/vehicle-trailer",
  },
  {
    name: "Event Tent Signs",
    image: signImg04,
    link: "/marketing-signs",
  },
  {
    name: "Trade Show Support Materials",
    image: signImg01,
    link: "/electric-signs",
  },
];

const ExpoDisplay = () => {
  return (
    <>
      <SubCategoryHeader
        title="Expo Display"
        description="Our Expo Display signs are built to withstand weather conditions while maintaining a professional look."
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

export default ExpoDisplay;
