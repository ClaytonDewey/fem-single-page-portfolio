import { Icon } from '../svg';
import data from '../sociallinks';

type SocialLinksProps = {
  ariaLabel: string;
};

const SocialLinks = ({ ariaLabel }: SocialLinksProps) => {
  return (
    <div className='social' aria-label={ariaLabel}>
      <p>adamkeyes</p>
      <nav>
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
    </div>
  );
};
export default SocialLinks;
