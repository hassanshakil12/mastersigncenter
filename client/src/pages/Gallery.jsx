import React from "react";
import { Gallery } from "../components";
import galleryImg1 from "../assets/gallery01.jpg";

const imagesData = [
  {
    id: 1,
    src: galleryImg1,
    title: "Custom LED Sign",
    description: "Bright and eye-catching LED signage for your business.",
  },
  {
    id: 2,
    src: galleryImg1,
    title: "Outdoor Banner",
    description: "Durable and weather-resistant banners for promotions.",
  },
  {
    id: 3,
    src: galleryImg1,
    title: "Neon Wall Sign",
    description: "Stylish neon signs to enhance your interior decor.",
  },
  {
    id: 4,
    src: galleryImg1,
    title: "Shop Front Sign",
    description: "Professional shop front signage for brand recognition.",
  },
  {
    id: 5,
    src: galleryImg1,
    title: "Custom LED Sign",
    description: "Bright and eye-catching LED signage for your business.",
  },
  {
    id: 6,
    src: galleryImg1,
    title: "Outdoor Banner",
    description: "Durable and weather-resistant banners for promotions.",
  },
  {
    id: 7,
    src: galleryImg1,
    title: "Neon Wall Sign",
    description: "Stylish neon signs to enhance your interior decor.",
  },
  {
    id: 8,
    src: galleryImg1,
    title: "Shop Front Sign",
    description: "Professional shop front signage for brand recognition.",
  },
  {
    id: 9,
    src: galleryImg1,
    title: "Custom LED Sign",
    description: "Bright and eye-catching LED signage for your business.",
  },
  {
    id: 10,
    src: galleryImg1,
    title: "Outdoor Banner",
    description: "Durable and weather-resistant banners for promotions.",
  },
  {
    id: 11,
    src: galleryImg1,
    title: "Neon Wall Sign",
    description: "Stylish neon signs to enhance your interior decor.",
  },
  {
    id: 12,
    src: galleryImg1,
    title: "Shop Front Sign",
    description: "Professional shop front signage for brand recognition.",
  },
];

const GalleryPage = () => {
  return (
    <div>
      <Gallery images={imagesData} />
    </div>
  );
};

export default GalleryPage;
