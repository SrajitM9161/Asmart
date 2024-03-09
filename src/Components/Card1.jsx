import React, { useState } from 'react';
import '../CSS/Card1.css'

const Card1 = ({ title, description, image, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Card1;
