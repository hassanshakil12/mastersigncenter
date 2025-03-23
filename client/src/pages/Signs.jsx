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
    name: "Channel Letters",
    image: signImg01, // Replace with actual image import
    link: "/channel-letters",
  },
  {
    name: "Monument Signs",
    image: signImg02,
    link: "/monument-signs",
  },
  {
    name: "Directional Signs",
    image: signImg03,
    link: "/directional-signs",
  },
  {
    name: "Neon Signs",
    image: signImg04,
    link: "/neon-signs",
  },
  {
    name: "Illuminated Signs",
    image: signImg01,
    link: "/illuminated-signs",
  },
  {
    name: "Dimensional Signs",
    image: signImg02,
    link: "/dimensional-signs",
  },
  {
    name: "Building Signs",
    image: signImg03,
    link: "/building-signs",
  },
  {
    name: "Lobby Signs",
    image: signImg04,
    link: "/lobby-signs",
  },
  {
    name: "Door Signs",
    image: signImg01,
    link: "/door-signs",
  },
  {
    name: "A-Frame Signs",
    image: signImg02,
    link: "/a-frame-signs",
  },
  {
    name: "Reflective Signs",
    image: signImg03,
    link: "/reflective-signs",
  },
  {
    name: "Safety Signs (OSHA)",
    image: signImg04,
    link: "/safety-signs",
  },
  {
    name: "Wayfinding Signs",
    image: signImg01,
    link: "/wayfinding-signs",
  },
  {
    name: "ADA Compliant Signs",
    image: signImg02,
    link: "/ada-compliant-signs",
  },
  {
    name: "Directional Signage",
    image: signImg03,
    link: "/directional-signage",
  },
  {
    name: "Custom Signs (Fabricated, Metal, Wood, Acrylic)",
    image: signImg04,
    link: "/custom-signs",
  },
  {
    name: "Floor Graphics",
    image: signImg01,
    link: "/floor-graphics",
  },
  {
    name: "Wall Graphics",
    image: signImg02,
    link: "/wall-graphics",
  },
  {
    name: "Pylon Signs",
    image: signImg03,
    link: "/pylon-signs",
  },
  {
    name: "Yard Signs",
    image: signImg04,
    link: "/yard-signs",
  },
  {
    name: "Real Estate Signs",
    image: signImg01,
    link: "/real-estate-signs",
  },
  {
    name: "Real Estate Rider Signs",
    image: signImg02,
    link: "/real-estate-rider-signs",
  },
  {
    name: "Hanging Signs",
    image: signImg03,
    link: "/hanging-signs",
  },
  {
    name: "Temporary and Event Signage",
    image: signImg04,
    link: "/temporary-event-signage",
  },
];

const Signs = () => {
  return (
    <>
      <SubCategoryHeader
        title="Signs"
        description="Our Signs are built to withstand weather conditions while maintaining a professional look."
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

export default Signs;
