import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  text: string;
};

const ScrollButton = ({ text }: Props) => {
  return (
    <AnchorLink href='#contact' className='btn btn-primary'>
      {text}
    </AnchorLink>
  );
};
export default ScrollButton;
