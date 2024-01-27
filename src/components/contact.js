import React from 'react';
import  mail from './images/Gmail.png';
import phone from './images/phone.png';
import Navbar from './navbar';
import Footer from './Footer';
import { FiInstagram, FiFacebook, FiX } from 'react-icons/fi';

const Contact = () => {
  return (

    <>
    <Navbar />
        <div className="text-center h-screen  p-10">
      <h2 className="text-2xl font-semibold my-4">Contact</h2>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center mb-4">
          <img
            src={mail}
            alt="Email Icon"
            className="w-6 h-6 mr-2"
          />
          <p>Email: kglobaltraders@gmail.com</p><br></br>
          
        </div>
        <p>tspraj@kglobaltraders.com</p><br></br>
          <p>contact@kglobaltraders.com</p><br></br>
        <div className="flex items-center">
          <img
            src={phone}
            alt="Mobile Icon"
            className="w-6 h-6 mr-2"
          />
          <p>Mobile Number: +91 9985033401</p>
        </div>
        <div>
            <h2 className="text-2xl font-semibold pt-10">Social Media</h2>
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

    {/* <div className="cart-item border p-4 m-4 rounded-lg">
    <div className="rounded-full overflow-hidden w-32 h-28 mx-auto mb-2">
      <img src={profile1} alt="profile" className="w-32 h-32" />
    </div>  
      <h3 className="text-xl font-semibold mt-2">T S.P.Raj</h3>
      <p className="text-gray-600 mt-2">Founder & CEO</p>
      <p className="text-gray-600 mt-2">Mr.T S.P.Raj is a Businessman having 11 years of experience  in IT Sales & Client Management.He is the Co-Founder of K Innovations which is Technology based Start Up in India.</p>
      <p className="text-gray-600 mt-2">Email: tspraj@kglobaltraders.com</p>
    </div> */}
    


    
    </>
  );
};

export default Contact;
