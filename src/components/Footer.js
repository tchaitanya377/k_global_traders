import React from 'react';
import { FiInstagram, FiFacebook, FiX } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="max-w-full mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className='p-10'>
            K Global Traders is an Export and Import company based out in India which has a strong technical team to give the best Quality & Assurance to the Customers around the Globe. We are dealing with different kinds of Products based on customer's requirements.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-8">
          <div>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="flex flex-col space-y-2 m-5">
              <p>
                Email: kglobaltraders@gmail.com
              </p>
              <p>
              Mobile Number : +91 9985033401 
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Social Media</h2>
            <div className="flex space-x-4 text-center m-5">
              <a href="https://www.instagram.com/kglobaltraders" target="_blank" rel="noopener noreferrer">
                <FiInstagram className="text-2xl cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/kglobaltraders" target="_blank" rel="noopener noreferrer">
                <FiFacebook className="text-2xl cursor-pointer" />
              </a>
              <a href="https://twitter.com/KGlobalTraders" target="_blank" rel="noopener noreferrer">
                <FiX className="text-2xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
