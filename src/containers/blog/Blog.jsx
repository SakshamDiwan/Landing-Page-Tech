import React from 'react';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section_padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Jan 30, 2023" title="Beyond Binary: GPT-3's Journey Through Creativity, Science, and Society"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Jan 30, 2023" title="AI Alchemy: GPT-3's Magical Touch on Business Innovation"/>
          <Article imgUrl={blog03} date="Jan 30, 2023" title="Unlocking Productivity: GPT-3 and the Rise of AI-Driven Workflows"/>
          <Article imgUrl={blog04} date="Jan 30, 2023" title="GPT-3 Chronicles: Navigating the Cosmos of Creativity and Beyond"/>
          <Article imgUrl={blog05} date="Jan 30, 2023" title="Pixel Pioneers: GPT-3's Odyssey through Tech, Art, and Uncharted Lands"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
