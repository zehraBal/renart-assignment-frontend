import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRating from "./StarRating";

const ProductCarousel = ({ products }) => {
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorSelect = (productIndex, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productIndex]: color,
    }));
  };

  // Carousel responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="transform 300ms ease-in-out"
      containerClass="carousel-container"
    >
      {products.map((product, index) => {
        const currentColor = selectedColors[index] || "yellow";
        const imageUrl = product.images[currentColor];

        return (
          <div
            key={index}
            className="p-4 border rounded-lg mx-2 bg-white flex flex-col  border-transparent"
          >
            {/* Product Image */}
            <div className="mb-4 h-48 flex items-center justify-center">
              <img
                src={imageUrl}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentNode.innerHTML =
                    '<div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500">Image not available</div>';
                }}
              />
            </div>

            {/* Product Info */}
            <h3 className="font-semibold text-lg mb-1 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-gray-700 mb-2">
              ${product.price.toFixed(2)} USD
            </p>

            {/* Value Gold Rating */}
            <div className="mb-3">
              <span className="block text-sm">Value Gold</span>
              <StarRating score={product.popularityScore} />
            </div>

            {/* Color Selector - Fixed aspect ratio circles */}
            <div className="flex space-x-2 mb-3">
              {[
                { key: "yellow", hex: "#E6CA97" },
                { key: "white", hex: "#D9D9D9" },
                { key: "rose", hex: "#E1A4A9" },
              ].map((color) => (
                <button
                  key={color.key}
                  className={`rounded-full border-1 flex-shrink-0  ${
                    currentColor === color.key
                      ? "border-gray-100"
                      : "border-transparent"
                  }`}
                  style={{
                    backgroundColor: color.hex,
                    width: "24px",
                    height: "24px",
                    boxShadow: "inset 0 0 2px rgba(0,0,0,0.1)",
                  }}
                  onClick={() => handleColorSelect(index, color.key)}
                  aria-label={`${color.key} gold`}
                />
              ))}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default ProductCarousel;
