import React from 'react';
import { SocialLinks } from './';

type SiteIdentityProps = {};

const SiteIdentity: React.FC<SiteIdentityProps> = () => {
  return (
    <section className='site'>
      <div className='site__name'>
        <p>adamkeyes</p>
      </div>
      <SocialLinks />
    </section>
  );
};
export default SiteIdentity;
