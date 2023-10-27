import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <p className="text-lg text-center max-w-6xl p-10">
                K Global Traders is an Export and Import company based out in India which has a strong technical team to give the best Quality & Assurance to the Customers around the Globe. We are dealing with different kinds of Products based on customer's requirements.
            </p>
            </div>
        <Footer />
    </div>
  );
};

export default About;
