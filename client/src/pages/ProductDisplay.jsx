import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ClientReviews, FAQ } from "../components";
import "./css/ProductDisplay.css";

const materials = {
  Aluminum: 5,
  Sintra: 8,
  Acrylic: 12,
  Steel: 20,
  Wood: 10,
};

const signSizes = {
  "Small (12x18 inches)": { width: 12, height: 18 },
  "Medium (24x36 inches)": { width: 24, height: 36 },
  "Large (36x48 inches)": { width: 36, height: 48 },
  "Extra Large (48x72 inches)": { width: 48, height: 72 },
};

const ProductDisplay = () => {
  const { productName } = useParams();
  const location = useLocation();
  const product = location.state?.product || {};

  const [selectedSize, setSelectedSize] = useState("Small (12x18 inches)");
  const [selectedMaterial, setSelectedMaterial] = useState("Aluminum");
  const [quantity, setQuantity] = useState(1);

  const calculatePrice = () => {
    const { width, height } = signSizes[selectedSize];
    const area = (width * height) / 144;
    const materialCost = materials[selectedMaterial];
    return (area * materialCost * quantity).toFixed(2);
  };

  return (
    <>
      <div className="product-display-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details">
          <h2>{productName}</h2>
          <p>Customize your product by selecting the options below:</p>

          <label>Size:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {Object.keys(signSizes).map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>

          <label>Material:</label>
          <select
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
          >
            {Object.keys(materials).map((mat, index) => (
              <option key={index} value={mat}>
                {mat}
              </option>
            ))}
          </select>

          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />

          <h3>Total Price: ${calculatePrice()}</h3>

          <button className="btn add-to-cart">Add to Cart</button>
          <button className="btn buy-now">Buy Now</button>
        </div>
      </div>

      <ClientReviews />
      <FAQ />
    </>
  );
};

export default ProductDisplay;
