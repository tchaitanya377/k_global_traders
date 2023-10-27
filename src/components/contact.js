import React from 'react';
import  mail from './images/Gmail.png';
import phone from './images/phone.png';
import Navbar from './navbar';
import Footer from './Footer';
const Contact = () => {
  return (

    <>
    <Navbar />
        <div className="text-center h-screen pt-48">
      <h2 className="text-2xl font-semibold my-4">Contact</h2>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center mb-4">
          <img
            src={mail}
            alt="Email Icon"
            className="w-6 h-6 mr-2"
          />
          <p>Email: kglobaltraders@gmail.com</p>
        </div>

        <div className="flex items-center">
          <img
            src={phone}
            alt="Mobile Icon"
            className="w-6 h-6 mr-2"
          />
          <p>Mobile Number: +91 9985033401</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
