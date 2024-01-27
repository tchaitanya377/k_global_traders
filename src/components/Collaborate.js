import React from 'react';
import Navbar from './navbar';
import  mail from './images/Gmail.png';

const Collaborate = () => {
  return (
    <div>
        <Navbar />
        <div className="text-center p-10 ">
      <p className="text-lg text-center p-10">
      K Global Traders is looking for an individual or business persons or Export and Import companies around the world who are interested in partnering with each other on mutual agreement in projects.
      </p>
        <div className="text-center h-screen  p-10">
      <h2 className="text-2xl font-semibold my-4">For more information</h2>
      <h2 className="text-2xl font-semibold my-4">Contact</h2>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center mb-4">
          <img
            src={mail}
            alt="Email Icon"
            className="w-6 h-6 mr-2"
          />
          <p>Email: tspraj@kglobaltraders.com</p><br></br>
          
        </div>
          <p>contact@kglobaltraders.com</p><br></br>
          </div>
          </div>
    </div>
    </div>
  );
};

export default Collaborate;
