import React from 'react';

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className='hero'>
      <img
        src='/assets/images/pattern-circle.svg'
        alt=''
        className='hero__circle'
        width='129'
        height='129'
      />
      <img
        src='/assets/images/pattern-rings.svg'
        alt=''
        className='hero__rings'
        width='530'
        height='129'
      />
      <div className='hero__img'>
        <picture>
          <source
            media='(min-width: 62.5em)'
            srcSet='/assets/images/image-profile-desktop.webp'
          />
          <source
            media='(min-width: 37.5em)'
            srcSet='/assets/images/image-profile-tablet.webp'
          />
          <img
            src='/assets/images/image-profile-mobile.webp'
            alt='Adam Keyes'
            width-='174'
            height='383'
          />
        </picture>
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
