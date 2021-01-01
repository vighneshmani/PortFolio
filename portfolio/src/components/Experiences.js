import React from 'react';
import './Experiences.css';
import CardItem from './Carditem';

function Experiences() {
  return (
    <div className='ecards'>
      <h1>My Experiences</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/MMB.jpg'
              text='Digital Marketing Intern'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/VMGuitar.jpg'
              text='Guitar Instructor'
              label='Adventure'
              path='/products'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
