const HeaderImage = () => {
  return (
    <picture className='profile'>
      <source
        media='(min-width: 64em)'
        srcSet='./images/image-profile-desktop.webp'
      />
      <source
        media='(min-width: 48em)'
        srcSet='./images/image-profile-tablet.webp'
      />
      <img
        src='./images/image-profile-mobile.webp'
        alt='Adam Keyes'
        role='presentation'
        className='profile-img'
      />
    </picture>
  );
};
export default HeaderImage;
