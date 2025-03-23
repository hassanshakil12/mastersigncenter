import React from "react";
import { Link } from "react-router-dom";
import "./css/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p>
            <strong>📍 Address:</strong> 445 E State Rd, American Fork, UT 84003
          </p>
          <p>
            <strong>📞 Phone:</strong> <a href="tel:8019423176">801.942.3176</a>
          </p>
          <p>
            <strong>📧 Email:</strong>{" "}
            <a href="mailto:info@mastersigns.com">info@mastersigns.com</a>
          </p>

          <h3>Business Hours</h3>
          <ul>
            <li>Sunday: Closed</li>
            <li>Monday - Thursday: 9 AM – 6 PM</li>
            <li>Friday: 9 AM – 6 PM</li>
            <li>Saturday: 10 AM – 2 PM</li>
          </ul>

          {/* Social Media Links */}
          <div className="social-links">
            <a
              href="https://www.instagram.com/mastersigncenter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Master Signs Location"
          src="https://www.google.com/maps?q=445+E+State+Rd,+American+Fork,+UT+84003&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
