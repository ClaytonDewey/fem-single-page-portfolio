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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Use functional updates to ensure latest state is used
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateInput = () => {
    const newErrors: { [key: string]: string } = {};

    if (formData.name === '') {
      newErrors.name = 'Please enter your name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (formData.message === '') {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInput()) {
      // Handle form submission logic here
      toast(
        (t) => (
          <div className='success-toast'>
            <h2>This is not a live site.</h2>
            Message is not really being sent right now.
            <Button
              className='btn btn-toast'
              onClick={() => toast.dismiss(t.id)}>
              <Icon name='close' />
            </Button>
          </div>
        ),
        {
          style: {
            background: 'var(--clr-gray-light)',
            color: 'var(--clr-black)',
            boxShadow: 'var(--box-shadow)',
          },
        }
      );
      setErrors({});
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
          width: '80vw',
          marginInline: 'auto',
          maxWidth: '500px',
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
            <fieldset className='contact__form-fieldset'>
              <legend className='sr-only'>Contact Information</legend>

              <div
                className={`contact__form-group ${
                  errors.name ? 'is-invalid-input' : ''
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
                {errors.name && (
                  <>
                    <div className='is-invalid icon'>
                      <Icon name='info' />
                    </div>
                    <div className='is-invalid'>
                      <p className='error-message'>{errors.name}</p>
                    </div>
                  </>
                )}
              </div>
              <div
                className={`contact__form-group ${
                  errors.email ? 'is-invalid-input' : ''
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
                {errors.email && (
                  <>
                    <div className='is-invalid icon'>
                      <Icon name='info' />
                    </div>
                    <div className='is-invalid'>
                      <p className='error-message'>{errors.email}</p>
                    </div>
                  </>
                )}
              </div>
            </fieldset>

            <div className='contact__form-fieldset'>
              <legend className='sr-only'>Message</legend>
              <div
                className={`contact__form-group ${
                  errors.message ? 'is-invalid-input' : ''
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
                {errors.message && (
                  <>
                    <div className='is-invalid icon'>
                      <Icon name='info' />
                    </div>
                    <div className='is-invalid'>
                      <p className='error-message'>{errors.message}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <Button type='submit' className='btn btn-primary'>
              Send Message
            </Button>
          </form>
        </div>
        <hr />
        <SocialLinks ariaLabel='Footer Social Media Links' />
      </footer>
    </>
  );
};
export default Contact;
