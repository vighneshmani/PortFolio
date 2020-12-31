import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/quizapp.jpg'
              text='Quiz App'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/shopbot.png'
              text='Shopping Bot'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/ShooterPro.jpg'
              text='Space Shooter Pro'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

