import React from "react";
import "./css/TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-container">
      <h2>Terms & Conditions</h2>
      <p style={{textAlign: "center"}}>Last Updated: March 2025</p>

      <section>
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing or using Master Signs' website and services, you agree to
          be bound by these Terms & Conditions. If you do not agree, please do
          not use our website.
        </p>
      </section>

      <section>
        <h3>2. Use of Our Services</h3>
        <p>
          Our website and services are intended for lawful purposes only. You
          agree not to misuse our content, attempt unauthorized access, or
          engage in any fraudulent activities.
        </p>
      </section>

      <section>
        <h3>3. Orders & Payments</h3>
        <ul>
          <li>
            All orders placed through our website are subject to acceptance.
          </li>
          <li>Pricing is subject to change without notice.</li>
          <li>Payments must be made in full before production begins.</li>
        </ul>
      </section>

      <section>
        <h3>4. Refund & Cancellation Policy</h3>
        <p>
          Custom signage orders are non-refundable. Cancellations must be
          requested within 24 hours of order placement. Refunds will be
          processed only if an order has not entered production.
        </p>
      </section>

      <section>
        <h3>5. Intellectual Property</h3>
        <p>
          All content, logos, and designs on this website are the property of
          Master Signs and may not be copied, modified, or used without
          permission.
        </p>
      </section>

      <section>
        <h3>6. Liability & Disclaimers</h3>
        <p>
          Master Signs is not responsible for any indirect, incidental, or
          consequential damages arising from the use of our products or website.
        </p>
      </section>

      <section>
        <h3>7. Governing Law</h3>
        <p>
          These Terms & Conditions shall be governed by and construed in
          accordance with the laws of the State of Utah.
        </p>
      </section>

      <section>
        <h3>8. Changes to These Terms</h3>
        <p>
          We may update these Terms from time to time. Any changes will be
          posted on this page, and your continued use of our services
          constitutes acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h3>9. Contact Us</h3>
        <p>If you have any questions, feel free to reach out:</p>
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

export default TermsConditions;
