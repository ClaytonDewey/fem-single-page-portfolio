import React from 'react';
import { Hero, SiteIdentity } from './';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='header'>
      <SiteIdentity />
      <Hero />
    </header>
  );
};
export default Header;
