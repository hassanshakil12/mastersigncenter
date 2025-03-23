import React, { useState } from "react";
import "./css/Careers.css";

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your application has been submitted!");
  };

  return (
    <div className="careers-container">
      <h1>Careers at Master Signs</h1>
      <p style={{ textAlign: "center" }}>
        Join our team and be a part of an innovative and passionate sign
        company!
      </p>

      <section className="job-opening">
        <h2>Current Job Opportunity</h2><br />
        <h3>Graphic Designer - Sign Industry</h3>
        <p>
          <strong>Location:</strong> Master Signs, Utah
        </p>
        <p>
          <strong>Job Type:</strong> Full-time
        </p>
        <h4>About Us:</h4>
        <p>
          At Master Signs, we’re more than just a sign company—we’re a
          family-driven business that prides itself on quality craftsmanship,
          innovative design, and exceptional customer service.
        </p>

        <h4>Job Description:</h4>
        <p>
          We are seeking an experienced Graphic Designer who can bring ideas to
          life while managing multiple aspects of production. You’ll collaborate
          with our design, production, and project management teams to create
          visually stunning signs, banners, vehicle wraps, and more.
        </p>

        <h4>Key Responsibilities:</h4>
        <ul>
          <li>
            Develop custom signage designs for storefronts, banners, vehicle
            wraps, trade show displays, etc.
          </li>
          <li>Oversee printing processes, ensuring high-quality output.</li>
          <li>Manage multiple projects, meeting deadlines and client needs.</li>
          <li>Work closely with sales, production, and project managers.</li>
          <li>Troubleshoot design or production challenges.</li>
        </ul>

        <h4>Qualifications:</h4>
        <ul>
          <li>
            2+ years of experience in graphic design, specifically in the sign
            industry.
          </li>
          <li>Proficiency in Adobe Illustrator, Photoshop, and InDesign.</li>
          <li>Understanding of color theory, typography, and layout design.</li>
          <li>Experience with sign production and printing processes.</li>
          <li>Ability to work in a fast-paced, deadline-driven environment.</li>
        </ul>

        <h4>Why Join Us?</h4>
        <ul>
          <li>Competitive pay and benefits.</li>
          <li>Collaborative and creative work environment.</li>
          <li>Exciting projects in the sign and design industry.</li>
          <li>Be part of a family-owned business committed to quality.</li>
        </ul>
      </section>

      <section className="application-form">
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Resume:
            <input type="file" name="resume" onChange={handleChange} required />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </label>

          <button type="submit">Submit Application</button>
        </form>
      </section>
    </div>
  );
};

export default CareersPage;
