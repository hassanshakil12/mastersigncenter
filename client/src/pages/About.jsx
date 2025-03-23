import React from "react";
import "./css/About.css";
import employeeImg1 from "../assets/employee.jpg";
import employeeGroup from "../assets/employeeGroup.jpg";

const teamMembers = [
  { name: "Alan", img: employeeImg1 },
  { name: "Jolene", img: employeeImg1 },
  { name: "Craig", img: employeeImg1 },
  { name: "Randy", img: employeeImg1 },
  { name: "Shaylynn", img: employeeImg1 },
  { name: "Judy", img: employeeImg1 },
  { name: "Landon", img: employeeImg1 },
  { name: "Carter", img: employeeImg1 },
  { name: "Ellie", img: employeeImg1 },
  { name: "Alivia", img: employeeImg1 },
  { name: "Lee", img: employeeImg1 },
  { name: "Isaak", img: employeeImg1 },
  { name: "Roxy", img: employeeImg1 },
];

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Master Signs</h1>
        <p>A Legacy of Innovation and Excellence</p>
      </header>

      <section className="history">
        <h2>Our Story</h2>
        <p>
          Founded in 1972 by Alan Lasson, AAA Sign Center in Salt Lake City,
          Utah, has evolved into a leader in the sign manufacturing industry.
          Alan, a skilled manufacturing engineer with experience at General
          Electric and Eimco, brought technical expertise and innovation to the
          field. His patented designs and dedication to precision led to a
          thriving business that merged craftsmanship with engineering.
        </p>
        <p>
          Over the years, Master Signs has expanded into various sectors,
          including warehouse, retail, corporate branding, and custom signage.
          The Lasson family also owns See Me Signs in Idaho, recognized as the
          Best Sign Company in Idaho in 2024. Today, Master Signs offers
          cutting-edge services like laser engraving, vehicle wraps, ADA
          signage, CNC services, and architectural signage.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          "Our mission is simple: to make your life easy, your business shine,
          and your brand unforgettable. Driven by passion, guided by faith, and
          dedicated to helping you look amazing, we love serving you and
          ensuring your success every step of the way."
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.img} alt={member.name} className="team-photo" />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
        <div className="group-photo">
          <img src={employeeGroup} alt="Team Group Photo" />
        </div>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Quality Craftsmanship</li>
          <li>Innovation & Design</li>
          <li>Customer Satisfaction</li>
          <li>Integrity & Trust</li>
          <li>Commitment to Excellence</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <p>
          ⭐⭐⭐⭐⭐ See what people are saying about us on{" "}
          <a
            href="https://www.google.com/search?q=Master+Signs+Google+Reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Reviews
          </a>
          .
        </p>
      </section>

      <section className="certifications">
        <h2>Certifications & Affiliations</h2>
        <ul>
          <li>🏆 International Sign Association</li>
          <li>📍 Utah Sign Association</li>
          <li>✅ Licensed & Insured with the State of Utah</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
