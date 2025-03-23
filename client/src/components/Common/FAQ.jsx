import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./css/FAQ.css"; // Import custom CSS

const faqs = [
  {
    question: "What services does Master Signs offer?",
    answer:
      "We provide a variety of sign-making services, including custom signage, laser engraving, banners, decals, and more.",
  },
  {
    question: "How long does it take to complete an order?",
    answer:
      "Production times vary depending on the complexity, but most orders are completed within 5-7 business days.",
  },
  {
    question: "Do you offer design assistance?",
    answer:
      "Yes! Our design experts can help bring your ideas to life with professional recommendations and mockups.",
  },
  {
    question: "What materials do you use for signs?",
    answer:
      "We use high-quality materials such as acrylic, aluminum, PVC, vinyl, and LED lighting for illuminated signs.",
  },
  {
    question: "Can I get a custom quote for my project?",
    answer:
      "Absolutely! Contact us with your requirements, and we’ll provide a detailed quote tailored to your needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
