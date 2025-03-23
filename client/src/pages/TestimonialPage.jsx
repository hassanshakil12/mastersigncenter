import React from "react";
import { Testimonial } from "../components";
import clientImg from "../assets/employee.jpg";

const testimonialsData = [
  {
    name: "John Doe",
    role: "CEO, XYZ Corp",
    message:
      "Master Signs transformed our brand visibility with amazing signage!",
    image: clientImg,
  },
  {
    name: "Sarah Smith",
    role: "Marketing Manager, ABC Ltd.",
    message: "Exceptional service and high-quality products. Highly recommend!",
    image: clientImg,
  },
  {
    name: "Michael Johnson",
    role: "Business Owner",
    message:
      "Professional team, great customer service, and outstanding results!",
    image: clientImg,
  },
  {
    name: "Emma Williams",
    role: "Creative Director, Design Hub",
    message:
      "Master Signs delivered exactly what we needed – stunning signage with a professional touch!",
    image: clientImg,
  },
  {
    name: "David Miller",
    role: "Owner, Miller's Café",
    message:
      "Their attention to detail and quality exceeded my expectations. Highly recommended!",
    image: clientImg,
  },
  {
    name: "Sophia Martinez",
    role: "Marketing Lead, Tech Innovations",
    message:
      "Outstanding service from start to finish. The team was responsive, creative, and efficient!",
    image: clientImg,
  },
  {
    name: "James Anderson",
    role: "CEO, Anderson & Co.",
    message:
      "Master Signs played a key role in revamping our brand identity. Exceptional work!",
    image: clientImg,
  },
  {
    name: "Linda Carter",
    role: "Head of Operations, Green Energy Solutions",
    message:
      "The signage they created for our business was top-notch. Great craftsmanship!",
    image: clientImg,
  },
  {
    name: "Michael Brown",
    role: "Restaurant Owner, The Tasty Spot",
    message:
      "From consultation to installation, everything was smooth and professional. Love the results!",
    image: clientImg,
  },
];

const TestimonialPage = () => {
  return (
    <div>
      <Testimonial testimonials={testimonialsData} />
    </div>
  );
};

export default TestimonialPage;
