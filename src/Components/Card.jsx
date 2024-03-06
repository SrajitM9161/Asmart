import React, { useCallback } from 'react';
import '../CSS/Card.css';
import { useNavigate } from 'react-router-dom';


const Card = (props) => {
  const navigate = useNavigate();

  const handleJoin = useCallback(() => {
    navigate('/trade'); 
  }, [navigate]);

  return (
    <div className='card'>
      
        <h2 className='card_title'>{props.title}</h2>
        <img className='card_image' src={props.image} alt={props.title} />
      
    </div>
  );
};

export default Card;
