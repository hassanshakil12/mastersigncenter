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
    name: "Branding and Theming for Businesses",
    image: signImg01, // Replace with actual image import
    link: "/branding-theming",
  },
  {
    name: "Signage for Multi-Location Programs",
    image: signImg02,
    link: "/multi-location-signage",
  },
  {
    name: "Sign Design and Consultation Services",
    image: signImg03,
    link: "/sign-design-consultation",
  },
  {
    name: "Digital Printing",
    image: signImg04,
    link: "/digital-printing",
  },
  {
    name: "Marketing Signage",
    image: signImg01,
    link: "/marketing-signage",
  },
  {
    name: "Custom Vinyl Decals for Marketing Campaigns",
    image: signImg02,
    link: "/vinyl-marketing-decals",
  },
  {
    name: "Point-of-Purchase Displays",
    image: signImg03,
    link: "/point-of-purchase-displays",
  },
  {
    name: "Printed Wall Graphics",
    image: signImg04,
    link: "/printed-wall-graphics",
  },
  {
    name: "Business Cards",
    image: signImg01,
    link: "/business-cards",
  },
  {
    name: "Metal Business Cards",
    image: signImg02,
    link: "/metal-business-cards",
  },
];

const Marketing = () => {
  return (
    <>
      <SubCategoryHeader
        title="Marketing Signs"
        description="Our Marketing signs are built to withstand weather conditions while maintaining a professional look."
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

export default Marketing;
