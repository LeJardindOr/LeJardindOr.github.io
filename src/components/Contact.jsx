import React from 'react';
import ContactImg from "../assets/images/contact.jpg";

function Contact() {
  return (
    <div className="container mx-auto mt-5 p-8">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <h3 className="mb-2">Contact Us</h3>
          <h4 className="text-lg mb-4">Questions? Comments? Feedback? We're listening.</h4>
          <form>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" className="mt-1 block w-full rounded-sm border border-gray-400 focus:border-gray-600" id="firstName" placeholder="John" />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" className="mt-1 block w-full rounded-sm border border-gray-400 focus:border-gray-600" id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-sm border border-gray-400 focus:border-gray-600" id="email" placeholder="john.doe@example.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea className="mt-1 block w-full rounded-sm border border-gray-400 focus:border-gray-600" id="message" rows="3" placeholder="Your message here"></textarea>
            </div>
            <button type="submit" className="flex mx-auto px-48 py-2 text-white border bg-dark-green rounded-lg">Submit</button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <img src={ContactImg} alt="Contact image" className="w-full rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default Contact;