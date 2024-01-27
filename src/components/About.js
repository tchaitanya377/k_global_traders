import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import profile1 from './images/profile1.jpg';
import profile2 from './images/profile2.jpg';
import { FiInstagram, FiFacebook, FiX } from 'react-icons/fi';

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center p-20">
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <p className="text-lg text-center max-w-6xl p-10">
                K Global Traders is an Export and Import company based out in India which has a strong technical team to give the best Quality & Assurance to the Customers around the Globe. We are dealing with different kinds of Products based on customer's requirements.
            </p>
            </div>

            <div class="flex justify-center md:m-10">
  <div class="profile-card p-4 border rounded-lg shadow-lg bg-white m-4 flex max-w-4xl">
    <img src={profile2} alt="Profile Image" class="md:w-auto md:h-32 h-20 w-20 border border-gray-500 rounded-full mr-4" />
    <div>
      <h3 class="text-xl font-semibold">T S.P.Raj</h3>
      <p class="text-gray-600 mt-2">Founder & CEO</p>
      <p class="text-gray-600 mt-2">Mr.T S.P.Raj is a Businessman having 11 years of experience in IT Sales & Client Management. He is the Co-Founder of K Innovations, a Technology-based Startup in India.</p>
      <p class="text-gray-600 mt-2">Email: tspraj@kglobaltraders.com</p>
    </div>
  </div>
</div>

<div class="flex justify-center md:m-10">
  <div class="profile-card p-4 border rounded-lg shadow-lg bg-white m-4 flex max-w-4xl">
    <img src={profile1} alt="Profile Image" class="md:w-auto md:h-32 h-20 w-20 border border-gray-500 rounded-full mr-4" />
    <div>
      <h3 class="text-xl font-semibold">Tejaswini Kurukuntla</h3>
      <p class="text-gray-600 mt-2">Business Development Manager </p>
      <p class="text-gray-600 mt-2">Mrs.Tejaswini Kurukuntla holding 9 years of Experience in B2B ,B2C sales & Client Relationship Management and Export and Import Business.She is a dedicated and passionate hard working manager.Her strategic planning and goal oriented work achieve the targets within the time.</p>
      <p class="text-gray-600 mt-2">Email: contact@kglobaltraders.com</p>
    </div>
  </div>
</div>
        


    </div>
  );
};

export default About;
