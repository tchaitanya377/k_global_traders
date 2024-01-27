import React, { useState, useEffect } from 'react';

const ImageSlideshow = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(transitionInterval);
    };
  }, [images, interval]);

  return (
    <div className="relative w-full h-96 md:h-80 lg:h-120 overflow-hidden">
      <div
        className="slideshow flex transition-transform transform -translate-x-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${(currentImageIndex / images.length) * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-96 md:h-80 lg:h-120 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
