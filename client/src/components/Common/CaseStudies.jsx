import React from "react";
import "./css/CaseStudies.css";
import customerImg from "../../assets/employee.jpg";

const caseStudiesData = [
  {
    title: "Corporate Signage",
    description:
      "A premium signage project for a corporate office, ensuring high visibility and aesthetics.",
    image: customerImg,
  },
  {
    title: "Retail Branding",
    description: "Branding and signage solutions for a high-end retail store.",
    image: customerImg,
  },
  {
    title: "Event Signage",
    description: "Custom banners and displays for a major industry event.",
    image: customerImg,
  },
  {
    title: "Wayfinding System",
    description:
      "An interactive wayfinding signage system for a large hospital.",
    image: customerImg,
  },
];

const CaseStudies = () => {
  return (
    <div className="case-studies-container">
      <h2 className="case-studies-title">Our Case Studies</h2>
      <div className="case-studies-grid">
        {caseStudiesData.map((study, index) => (
          <div key={index} className="case-study-card">
            <img
              src={study.image}
              alt={study.title}
              className="case-study-image"
            />
            <div className="case-study-content">
              <h3 className="case-study-title">{study.title}</h3>
              <p className="case-study-description">{study.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
