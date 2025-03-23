import React from "react";
import "./css/TermsConditions.css";

const PrivacyPolicy = () => {
  return (
    <div className="terms-container">
      <h2>Privacy Policy</h2>
      <p style={{ textAlign: "center" }}>Last Updated: March 2025</p>

      <section>
        <h3>1. Introduction</h3>
        <p>
          Welcome to Master Signs. Your privacy is important to us, and this
          policy outlines how we collect, use, and protect your personal
          information when you visit our website or use our services.
        </p>
      </section>

      <section>
        <h3>2. Information We Collect</h3>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, and any details you provide through our contact forms.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about your visit, such as
            pages viewed, time spent on the website, and browser type.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies to improve your browsing
            experience and analyze website traffic.
          </li>
        </ul>
      </section>

      <section>
        <h3>3. How We Use Your Information</h3>
        <ul>
          <li>To provide and improve our services</li>
          <li>To respond to your inquiries</li>
          <li>To analyze website performance</li>
          <li>To ensure security and prevent fraud</li>
        </ul>
      </section>

      <section>
        <h3>4. Sharing Your Information</h3>
        <p>
          We do not sell, trade, or rent your personal information. We may share
          your data with trusted third-party service providers who assist in
          operating our business.
        </p>
      </section>

      <section>
        <h3>5. Your Rights</h3>
        <p>
          You have the right to access, update, or request deletion of your
          personal information. To exercise these rights, contact us at{" "}
          <a href="mailto:info@mastersigns.com">info@mastersigns.com</a>.
        </p>
      </section>

      <section>
        <h3>6. Data Security</h3>
        <p>
          We implement security measures to protect your data, but no method is
          100% secure. We advise you to take precautions when sharing personal
          information online.
        </p>
      </section>

      <section>
        <h3>7. Third-Party Links</h3>
        <p>
          Our website may contain links to external sites. We are not
          responsible for the privacy practices of these third parties.
        </p>
      </section>

      <section>
        <h3>8. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated date.
        </p>
      </section>

      <section>
        <h3>9. Contact Us</h3>
        <p>If you have any questions, please contact us at:</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@mastersigns.com">info@mastersigns.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:8019423176">801.942.3176</a>
        </p>
        <p>
          <strong>Address:</strong> 445 E State Rd, American Fork, UT 84003
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
