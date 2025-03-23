import React from "react";
import "./css/Testimonial.css";

const Testimonial = ({ testimonials }) => {
  return (
    <div className="testimonial-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-message">"{testimonial.message}"</p>
            <div className="testimonial-user">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
