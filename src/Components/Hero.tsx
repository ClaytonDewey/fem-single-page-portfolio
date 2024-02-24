import React from 'react';

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className='hero'>
      <div className='hero__img'>
        <img src='./assets/images/image-profile-mobile.webp' alt='Adam' />
      </div>
      <div className='hero__body'>
        <h1>
          Nice to meet you! I'm <span>Adam Keyes</span>.
        </h1>
        <p>
          Based in the UK, I&rsquo;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
      </div>
      <a href='#contact' className='btn btn__primary'>
        Contact Me
      </a>
    </div>
  );
};
export default Hero;
