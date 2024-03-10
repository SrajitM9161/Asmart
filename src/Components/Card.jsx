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
      
        <h2>{props.title}</h2>
        <img  src={props.image}  />

    </div>
  );
};

export default Card;
