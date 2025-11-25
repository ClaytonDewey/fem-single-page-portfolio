import { HeaderImage, ScrollButton, SocialLinks } from '.';

const Hero = () => {
  return (
    <header className='hero'>
      <nav className='header__socials' aria-label='Social Media Links'>
        <SocialLinks />
      </nav>
      <HeaderImage />
      <div className='hero__text'>
        <h1>
          Nice to meet you! I&rsquo;m <span>Adam Keyes</span>.
        </h1>
        <p>
          Based in the UK, I&rsquo;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <ScrollButton text='Contact Me' />
      </div>
    </header>
  );
};
export default Hero;
