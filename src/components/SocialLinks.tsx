import { Icon } from '../svg';
import data from '../sociallinks';

type SocialLinksProps = {
  ariaLabel: string;
};

const SocialLinks = ({ ariaLabel }: SocialLinksProps) => {
  return (
    <nav className='social' aria-label={ariaLabel}>
      <p>adamkeyes</p>
      <ul className='social__links'>
        {data.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              <Icon name={link.text} />
              <span className='sr-only'>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default SocialLinks;
