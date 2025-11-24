import {
  IconCircle,
  IconFrontendMentor,
  IconGithub,
  IconInfo,
  IconLinkedIn,
  IconRings,
  IconTwitter,
} from '.';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'circle':
      return <IconCircle />;
    case 'frontendmentor':
      return <IconFrontendMentor />;
    case 'github':
      return <IconGithub />;
    case 'info':
      return <IconInfo />;
    case 'linkedin':
      return <IconLinkedIn />;
    case 'rings':
      return <IconRings />;
    case 'twitter':
      return <IconTwitter />;
    default:
      return <IconFrontendMentor />;
  }
};

export default Icon;
