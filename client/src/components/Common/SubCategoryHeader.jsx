import React from "react";
import "./css/SubCategoryHeader.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Star icons

const SubCategoryHeader = ({ title, description, image, points, rating }) => {
  // Generate stars based on rating
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="star filled" />
        ))}
        {halfStar && <FaStarHalfAlt className="star half" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="star empty" />
        ))}
      </>
    );
  };

  return (
    <header className="sign-category-header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <p className="header-description">{description}</p>

        {/* Star Rating */}
        <div className="rating">
          {renderStars()}
          <span className="rating-value">{rating.toFixed(1)}</span>
        </div>

        {/* Key Points */}
        <ul className="key-points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className="header-image">
        <img src={image} alt={title} />
      </div>
    </header>
  );
};

export default SubCategoryHeader;
