import { Icon } from '../svg';
import data from '../sociallinks';

const SocialLinks = () => {
  return (
    <section className='social'>
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
    </section>
  );
};
export default SocialLinks;
