'use client'
import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<null | string>(null);
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });
  };

  const handleSubmit = async () => {
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitError('Please complete all fields');
        return;
      }
      
      if (isSubmitting) return;

      setIsSubmitting(true);
      setSubmitSuccess(false);
      setSubmitError(null);

      try {
          const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });

          if (response.ok) {
              setSubmitSuccess(true);
              setFormData({
                  name: '',
                  email: '',
                  message: '',
              });
          } else {
              setSubmitError('Failed to send message');
          }
      } catch (error) {
          setSubmitError('Error occurred while sending message');
      } finally {
          setIsSubmitting(false);
      }
  };
  
  return (
    <div className='flex items-center justify-center h-full my-10 mx-12'>
      <div className="dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact us</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="first-name">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                type="name"
                required={true}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                type="email"
                required={true}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Message</label>
              <textarea
                className="w-full min-h-[100px] border border-gray-300 rounded-md p-2 text-black"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-center space-x-4">
                <Button className="w-3/5" onClick={handleSubmit}>
                  <div className="flex items-center justify-center">
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </div>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                  {submitSuccess && (
                      <p className="text-green-500">Message sent successfully!</p>
                  )}
                  {submitError && <p className="text-red-500">{submitError}</p>}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}