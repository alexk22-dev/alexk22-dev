// pages/Contact.js
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const Contact = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    message: ''
  });

  // ... (rest of the component remains the same)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        await submitToGoogleSheet(formData);
        console.log('Data submitted successfully');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          title: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    }
  };  

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="First Name"
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            label="Last Name"
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            label="Email Address"
            type="email"
            id="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Phone Number"
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            label="Company Name"
            type="text"
            id="company"
            placeholder="Enter your company name"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <Input
            label="Job Title"
            type="text"
            id="title"
            placeholder="Enter your job title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <textarea
            rows="6"
            className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60 resize-none"
            placeholder="Your message..."
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
