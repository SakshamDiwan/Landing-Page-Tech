import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: "Dynamic Content Creation", 
    text: "From creative writing to marketing copy, experience a tool that understands your intent and crafts content that resonates with your audience, making your ideas come to life in ways you never imagined."
  },
  {
    title: "Automated Decision Making", 
    text: "Describe your decision criteria, and let GPT-3 analyze data and provide insights to inform your choices. Experience the future of strategic decision support, where AI augments human decision-making capabilities, enabling more informed and visionary choices."
  },
  {
    title: "Adaptive Learning Environments", 
    text: "Personalize educational content dynamically, tailoring lessons to individual needs. Step into the future of education, where GPT-3 enhances the learning experience by adapting to each student's unique style and pace."
  },
  {
    title: "Interactive Story Evolution", 
    text: "Begin a narrative, and watch as GPT-3 dynamically adapts, responding to user inputs, creating a truly interactive and evolving story experience. Step into the future of narrative exploration, where every story becomes a collaborative journey between creator and AI."
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into the Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title+index} />
        ))}
      </div>
    </div>
  )
}

export default Features
