import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaFacebookF, FaGift, FaLinkedinIn } from 'react-icons/fa';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  purpose: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    purpose: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // You can later use formData to send a POST request
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8">
      <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Send A Message</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>Select your role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="professional">Professional</option>
            <option value="influencer">Influencer</option>
            <option value="organization">Organization</option>
            <option value="socialActivist">Social Activist</option>
          </select>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>Select purpose</option>
            <option value="volunteer">Volunteer</option>
            <option value="joinCoreTeam">Join Core Team</option>
            <option value="sponsorship">Sponsorship</option>
            <option value="feedback">Feedback</option>
            <option value="eventSuggestion">Event Suggestion</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">
          Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the form and send me an email.
        </p>
        <div className="flex space-x-4">
          <a href="https://example.com" className="text-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://github.com/YASHSHAH-create" className="text-blue-500">
            <FaGift />
          </a>
          <a href="https://www.linkedin.com/in/yash-shah-a83797273/" className="text-blue-500">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
