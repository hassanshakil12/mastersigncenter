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
    name: "Electronic Message Centers",
    image: signImg01, // Replace with actual image import
    link: "/electronic-message-centers",
  },
  {
    name: "LED and Digital Signs",
    image: signImg02,
    link: "/led-digital-signs",
  },
  {
    name: "Backlit Signs",
    image: signImg03,
    link: "/backlit-signs",
  },
  {
    name: "Channel Letters",
    image: signImg04,
    link: "/channel-letters",
  },
  {
    name: "Neon Signs",
    image: signImg01,
    link: "/neon-signs",
  },
  {
    name: "Illuminated Signage",
    image: signImg02,
    link: "/illuminated-signage",
  },
  {
    name: "Digital Printing for LED Displays",
    image: signImg03,
    link: "/digital-printing-led",
  },
];

const ElectricSigns = () => {
  return (
    <>
      <SubCategoryHeader
        title="Electric Signs"
        description="Our Electric signs are built to withstand weather conditions while maintaining a professional look."
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

export default ElectricSigns;
