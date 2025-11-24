import { useState } from 'react';
import { Input, Button, SocialLinks } from '.';
import { Icon } from '../svg';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [inputError, setInputError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setInputError('');
  };

  const validateInput = () => {
    if (formData.name === '') {
      setInputError('Please enter your name.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setInputError('Please enter a valid email address.');
      return false;
    }
    if (formData.message === '') {
      setInputError('Please enter your message.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInput()) {
      // Handle form submission logic here
      toast.success('Message sent successfully!');
      setInputError('');
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error('Please fix the errors in the form.');
    }
  };

  return (
    <>
      <Toaster
        containerStyle={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <footer id='contact' className='contact'>
        <div className='contact__wrapper'>
          <div className='contact__header'>
            <h2>Contact</h2>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I&rsquo;ll get back to you as soon as
              possible.
            </p>
          </div>
          <form className='contact__form' onSubmit={handleSubmit}>
            <div
              className={`contact__form-group ${
                inputError ? 'is-invalid-input' : ''
              }`}>
              <label className='sr-only' htmlFor='name'>
                Name
              </label>
              <Input
                type='text'
                id='name'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
              />
              {inputError && (
                <>
                  <div className='is-invalid icon'>
                    <Icon name='info' />
                  </div>
                  <div className='is-invalid'>
                    <p className='error-message'>{inputError}</p>
                  </div>
                </>
              )}
            </div>
            <div
              className={`contact__form-group ${
                inputError ? 'is-invalid-input' : ''
              }`}>
              <label className='sr-only' htmlFor='email'>
                Email
              </label>
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
              />
              {inputError && (
                <>
                  <div className='is-invalid icon'>
                    <Icon name='info' />
                  </div>
                  <div className='is-invalid'>
                    <p className='error-message'>{inputError}</p>
                  </div>
                </>
              )}
            </div>
            <div
              className={`contact__form-group ${
                inputError ? 'is-invalid-input' : ''
              }`}>
              <label className='sr-only' htmlFor='message'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                placeholder='Your message'
                value={formData.message}
                onChange={handleChange}></textarea>
              {inputError && (
                <>
                  <div className='is-invalid icon'>
                    <Icon name='info' />
                  </div>
                  <div className='is-invalid'>
                    <p className='error-message'>{inputError}</p>
                  </div>
                </>
              )}
            </div>
            <Button type='submit' className='btn btn-primary'>
              Send Message
            </Button>
          </form>
        </div>
        <hr />
        <SocialLinks />
      </footer>
    </>
  );
};
export default Contact;
