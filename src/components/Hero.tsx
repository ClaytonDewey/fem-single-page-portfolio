import { HeaderImage, SocialLinks } from '.';

const Hero = () => {
  return (
    <header className='hero'>
      <SocialLinks />
      <HeaderImage />
      <div className='hero__text'>
        <h1>
          Nice to meet you! I&rsquo;m <span>Adam Keyes</span>.
        </h1>
        <p>
          Based in the UK, I&rsquo;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <a href='#contact' className='btn btn-primary'>
          Contact Me
        </a>
      </div>
    </header>
  );
};
export default Hero;
