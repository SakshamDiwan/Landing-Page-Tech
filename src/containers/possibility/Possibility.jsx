import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibilities"/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Step into a realm where imagination meets innovation. With GPT-3, the possibilities are boundless, and your ideas are limited only by your creativity. Explore the extraordinary, redefine what's possible, and unlock a future where imagination is the catalyst for groundbreaking possibilities.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
