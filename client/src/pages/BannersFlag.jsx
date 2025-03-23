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
    name: "Vinyl Banners",
    image: signImg01, // Replace with actual image import
    link: "/vinyl-banners",
  },
  {
    name: "Flags",
    image: signImg2, // Replace with actual image import
    link: "/flags",
  },
  {
    name: "Custom Flags",
    image: signImg03, // Replace with actual image import
    link: "/custom-flags",
  },
  {
    name: "Flag Poles and Accessories",
    image: signImg04, // Replace with actual image import
    link: "/flag-poles-accessories",
  },
  {
    name: "Pole Banners",
    image: signImg01, // Replace with actual image import
    link: "/pole-banners",
  },
  {
    name: "Event and Promotional Banners",
    image: signImg02, // Replace with actual image import
    link: "/event-promotional-banners",
  },
  {
    name: "Banners for Sports Teams",
    image: signImg03, // Replace with actual image import
    link: "/sports-team-banners",
  },
];

const BannersFlag = () => {
  return (
    <>
      <SubCategoryHeader
        title="Banners / Flags"
        description="Our Banners / Flags signs are built to withstand weather conditions while maintaining a professional look."
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

export default BannersFlag;
