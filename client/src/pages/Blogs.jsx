import React from "react";
import { BlogList } from "../components";
import blogImg from "../assets/blog.jpg";

const blogsData = [
  {
    id: 1,
    title: "The Future of Signage: Digital Trends in 2025",
    description: "Discover the latest innovations in signage technology...",
    date: "March 21, 2025",
    image: blogImg,
    link: "/",
  },
  {
    id: 2,
    title: "How Custom Signs Can Boost Your Business",
    description: "Learn why custom signage is essential for branding...",
    date: "March 18, 2025",
    image: blogImg,
    link: "/",
  },
  {
    id: 3,
    title: "Best Materials for Outdoor Sign Boards",
    description: "A guide to choosing durable materials for your signs...",
    date: "March 15, 2025",
    image: blogImg,
    link: "/",
  },
  {
    id: 4,
    title: "The Future of Signage: Digital Trends in 2025",
    description: "Discover the latest innovations in signage technology...",
    date: "March 21, 2025",
    image: blogImg,
    link: "/",
  },
  {
    id: 5,
    title: "How Custom Signs Can Boost Your Business",
    description: "Learn why custom signage is essential for branding...",
    date: "March 18, 2025",
    image: blogImg,
    link: "/",
  },
  {
    id: 6,
    title: "Best Materials for Outdoor Sign Boards",
    description: "A guide to choosing durable materials for your signs...",
    date: "March 15, 2025",
    image: blogImg,
    link: "/",
  },
  {
    id: 7,
    title: "The Future of Signage: Digital Trends in 2025",
    description: "Discover the latest innovations in signage technology...",
    date: "March 21, 2025",
    image: blogImg,
    link: "/",
  },
  {
    id: 8,
    title: "How Custom Signs Can Boost Your Business",
    description: "Learn why custom signage is essential for branding...",
    date: "March 18, 2025",
    image: blogImg,
    link: "/",
  },
  {
    id: 9,
    title: "Best Materials for Outdoor Sign Boards",
    description: "A guide to choosing durable materials for your signs...",
    date: "March 15, 2025",
    image: blogImg,
    link: "/",
  },
];

const BlogsPage = () => {
  return (
    <>
      <BlogList blogs={blogsData} />
    </>
  );
};

export default BlogsPage;
