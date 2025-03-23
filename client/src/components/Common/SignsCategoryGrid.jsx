import React from "react";
import { Link } from "react-router-dom";
import "./css/SignsCategoryGrid.css";

const SignsCategoryGrid = ({ categories }) => {
  return (
    <div className="sign-category-grid">
      <h2>Our Sign Categories</h2>
      <div className="sign-category-grid-container">
        {categories.map((sign, index) => (
          <Link
            to={`/product/${encodeURIComponent(sign.name)}`}
            state={{ product: sign }}
            key={index}
            className="sign-card"
          >
            <img src={sign.image} alt={sign.name} className="sign-image" />
            <div className="sign-name">{sign.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SignsCategoryGrid;
