import React from "react";
import { Link } from "react-router-dom";
import "./css/SignsGrid.css";
import signImg01 from "../../assets/sign-img01.jpeg";
import signImg02 from "../../assets/sign-img02.jpeg";
import signImg03 from "../../assets/sign-img03.jpeg";
import signImg04 from "../../assets/sign-img04.jpeg";

const signsData = [
  {
    name: "Expo/Display",
    image: signImg01,
    path: "/expo-display",
  },
  {
    name: "Laser Engraving",
    image: signImg02,
    path: "/laser-engraving",
  },
  {
    name: "Decals/Stickers",
    image: signImg03,
    path: "/decals-stickers",
  },
  {
    name: "Banners/Flag",
    image: signImg04,
    path: "/banners-flag",
  },
  { name: "Signs", image: signImg01, path: "/signs" },
  {
    name: "Privacy/Security Films",
    image: signImg02,
    path: "/privacy-security",
  },
  { name: "Marketing", image: signImg03, path: "/marketing" },
  { name: "Promo", image: signImg04, path: "/promo" },
  {
    name: "Electric Signs",
    image: signImg01,
    path: "/expo-display",
  },
  {
    name: "Vehicle & Trailer",
    image: signImg02,
    path: "/laser-engraving",
  },
  {
    name: "Indoor Signs",
    image: signImg03,
    path: "/decals-stickers",
  },
  {
    name: "Outdoor Signs",
    image: signImg04,
    path: "/banners-flag",
  },
];

const SignsGrid = () => {
  return (
    <div className="signs-container">
      <h2 className="signs-title">Our Sign Categories</h2>
      <div className="signs-grid">
        {signsData.map((sign, index) => (
          <Link to={sign.path} key={index} className="sign-card">
            <img src={sign.image} alt={sign.name} className="sign-image" />
            <div className="sign-name">{sign.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SignsGrid;
