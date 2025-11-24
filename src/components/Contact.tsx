import { Input, Button, SocialLinks } from '.';

const Contact = () => {
  return (
    <footer id='contact' className='contact'>
      <div className='contact__wrapper'>
        <div className='contact__header'>
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&rsquo;ll get back to you as soon as
            possible.
          </p>
        </div>
        <form className='contact__form'>
          <div className='contact__form-group'>
            <label className='sr-only' htmlFor='name'>
              Name
            </label>
            <Input
              type='text'
              id='name'
              name='name'
              placeholder='Name'
              required
            />
          </div>
          <div className='contact__form-group'>
            <label className='sr-only' htmlFor='email'>
              Email
            </label>
            <Input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              required
            />
          </div>
          <div className='contact__form-group'>
            <label className='sr-only' htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Your message'
              required></textarea>
          </div>
          <Button type='submit' className='btn btn-primary'>
            Send Message
          </Button>
        </form>
      </div>
      <hr />
      <SocialLinks />
    </footer>
  );
};
export default Contact;
