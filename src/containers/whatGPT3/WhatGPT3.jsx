import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Discover the magic of GPT-3! GPT-3 is a state-of-the-art language model that brings artificial intelligence to new heights. With its ability to understand and generate human-like text, GPT-3 opens doors to limitless possibilities. Explore the future of communication, creativity, and problem-solving with the revolutionary capabilities of GPT-3."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Transform conversations with advanced AI, making interactions seamless and engaging. Elevate your user experience effortlessly."/>
        <Feature title="Knowledgebase" text="Tap into the infinite realm of information with our GPT-3 Knowledgebase. Unleash the power of advanced AI for quick, intelligent answers."/>
        <Feature title="Education" text="Transform education with GPT-3's limitless possibilities. From personalized learning to interactive lessons, redefine the future of intelligent education."/>
      </div>
    </div>
  )
}

export default WhatGPT3
