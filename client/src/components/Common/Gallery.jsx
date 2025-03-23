import React, { useState } from "react";
import "./css/Gallery.css";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <h2>Our Sign Gallery</h2>
      <div className="gallery-container">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openImage(image)}
          >
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h3 className="gallery-title">{image.title}</h3>
              <p className="gallery-description">{image.description}</p>
            </div>
          </div>
        ))}

        {selectedImage && (
          <div className="image-modal" onClick={closeImage}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={closeImage}>
                &times;
              </span>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="modal-image"
              />
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
