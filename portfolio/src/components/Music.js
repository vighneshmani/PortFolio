import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Music() {
  return (
    <div className='cards'>
      <h1>My Music</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/quizapp.jpg'
              text='Like a Dream'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/shopbot.png'
              text='viggimania'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/shopbot.png'
              text='Castle of Hope'
              label='Adventure'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Music;

