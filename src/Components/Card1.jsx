import React from 'react';
import "../CSS/Card1.css"


const Card1 = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="card" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.image} alt="cardd" className="card-imag" />
      {isHovered && (
        <div className="card-details">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      )}
    </div>
  );
};

export default Card1;
