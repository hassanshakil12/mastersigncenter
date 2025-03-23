import React, { useState } from "react";
import "./css/SignPriceCalculator.css";

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

const SignPriceCalculator = () => {
  const [selectedSize, setSelectedSize] = useState("Small (12x18 inches)");
  const [material, setMaterial] = useState("Aluminum");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    const { width, height } = signSizes[selectedSize];
    const area = (width * height) / 144; // Convert square inches to square feet
    const costPerSqFt = materials[material];
    const totalPrice = area * costPerSqFt * quantity;
    setPrice(totalPrice);
  };

  return (
    <div className="calculator-container">
      <h2>Sign Price Calculator</h2>
      <div className="calculator-inline">
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

        <select value={material} onChange={(e) => setMaterial(e.target.value)}>
          {Object.keys(materials).map((mat, index) => (
            <option key={index} value={mat}>
              {mat}
            </option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Quantity"
        />

        <button onClick={calculatePrice}>Calculate</button>

        <span className="price-result">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default SignPriceCalculator;
