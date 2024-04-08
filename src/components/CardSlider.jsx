// CardSlider.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import './CardSlider.css';

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div className='my-class'>
      <h2>Meetings & Events </h2>
    <div className="card-slider">
 
      <div className=" cards-container" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
        {cards.map((card, index) => (
          <div key={index} className={`card ${index === currentIndex ? 'active' : 'non-active'}`}>
            <img src={card.image} alt={card.title} />
            <div className='text'>
            <div className={`${index === currentIndex ? 'title' : ''}`}>
            <h3>{card.title}</h3>
            <p>{card.des}</p>
             </div>
             <div className={`${index === currentIndex ? 'main-date' : ''}`}>
            <p> {card.month}</p>
            <h2 className='date'> <b>{card.date}</b></h2>
            <p className='time'> {card.time}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
  
    </div>
    <button className="prev-btn" onClick={prevCard}>
    <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="next-btn" onClick={nextCard}>
      <FontAwesomeIcon icon={faArrowRight} />
      </button>
   
    </div>
  );
};

export default CardSlider;
