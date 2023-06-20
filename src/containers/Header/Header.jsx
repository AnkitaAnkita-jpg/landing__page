import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's Build Something amazing with the power of Technology</h1>
      <p>Enter a whimsical world of pixelated unicorns, where code and creativity collide. Journey through animated galaxies, with quirky characters guiding your digital exploration. Discover hidden Easter eggs, and let your imagination run wild. Embrace the whimsy and make your website truly magical</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;