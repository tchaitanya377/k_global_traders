import React from 'react';
import bg from './images/bg.jpg';
import Navbar from './navbar.js';
import arrow from './images/arrow.png';
import box from './images/box.png';
import wd from './images/world.jpg';
import user from './images/user.png';
import company from './images/company.png';
import Footer from './Footer';
import BayLeaves from './images/BayLeaves.jpg';
import Turmeric from './images/Turmeric.jpg';
import Cloves from './images/Cloves.jpg';
import Cinnamon from './images/Cloves.jpg';
import Cardamom from './images/Cardamom.jpg';
import BlackPepper from './images/Blackpepper.jpg';
import Mustard from './images/Mustard.jpg';
import Cumin from './images/Cumin.jpg';
import Coriander from './images/Coriander.jpg';
import DryFruit from './images/DryFruits.jpg';
import rice from './images/rice.jpg';
import ParaboiledRice from './images/ParaboiledRice.jpg';
import NonBasmatiRice from './images/NonBasmatiRice.jpg';
import ElectricalSafetyequipmentss from './images/ElectricalSafetyequipmentss.jpg';
import ImageSlideshow from './ImageSlideshow';
import { FiInstagram, FiFacebook, FiX } from 'react-icons/fi';

const images = [
  BayLeaves,
  Turmeric,
  Cloves,
  Cinnamon,
  Cardamom,
  BlackPepper,
  Mustard,
  Cumin,
  Coriander,

  // Add more image URLs as needed
];
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={bg} alt="background" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col">
          <h2 className="hidden md:block text-5xl text-white text-left p-10">
            K Global Traders
          </h2>
          <h1 className="text-2xl md:text-4xl text-white px-20 text-left py-10">
            Efficient Import and Export Products Worldwide  
          </h1>
        </div>
      </div>

    
      <div className="md:flex">
      <div className="flex flex-col md:flex-row m-4 md:m-10">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl md:text-4xl text-black">
          Company's
          </h2>
          <p className="text-base md:text-lg text-gray-600 py-4 md:py-20">
          K Global Traders is a Export & Import Company based out India.It Export & Import different kinds of Products around the Globe.</p>
        </div>
        <div className="md:w-1/2 p-4 order-2 md:order-1 md:ps-64 ">
          <img
            src={company}
            alt="Image"
            className="w-full md:w-80"
          />
        </div>
      </div>
    </div> 
      

  <div className="md:flex">
  <div className="flex flex-col md:flex-row m-4 md:m-10">
    <div className="md:w-1/2 p-4">
      <h2 className="text-2xl md:text-4xl text-black">
        Product's 
      </h2>
      <p className="text-base md:text-lg text-gray-600 py-4  md:py-20">
        At K Global Traders, safety is our top priority. Our products undergo rigorous quality control measures to ensure compliance with international safety standards.
      </p>
    </div>
    <div className="md:w-1/2 p-4 order-2 md:order-1 md:ps-64 ">
      <img
        src={box}
        alt="Image"
        className="w-full md:w-64"
      />
    </div>
  </div>
</div>

<div className="">
      <h1 className='text-2xl m-4'>Product's</h1>
      <ImageSlideshow images={images} interval={10000} />
    </div>





    {/* <div className="md:flex">
  <div className="flex flex-col m-4 md:m-10 md:flex-row">
    <div className="md:w-1/2 p-4 order-2 md:order-1">
      <img
        src={wd}
        alt="Image"
        className="w-full md:w-64"
      />
    </div>
    <div className="md:w-1/2 p-4 order-1 md:order-2">
      <h2 className="text-2xl md:text-4xl text-black">
        Transport
      </h2>
      <p className="text-base md:text-lg text-gray-600 py-4 md:py-20">
        K Global Traders provides dependable, efficient, and safety-focused transport services to ensure goods reach their destinations globally with ease and confidence.
      </p>
    </div>
  </div>
</div>
 */}









    <div className=''>
            <h2 className="text-3xl font-semibold pt-10">Social Media</h2>
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

{/* 
    <h2 className="text-2xl md:text-4xl text-black text-start md:m-20 m-5">Testimonials</h2>
    <div className="bg-white rounded-lg shadow-md p-4 border-2 border-gray-800 m-4 sm:m-20">
      <div className="flex flex-col items-center sm:flex-row sm:items-start">
        <div className="relative rounded-full overflow-hidden w-24 h-24 sm:w-20 sm:h-20">
          <img
            src={user}
            alt="Profile"
            className="w-20 h-20 object-cover object-center"
          />
        </div>
        <div className="text-center text-gray-800 font-semibold mt-2 sm:ml-4">
          <h1 className="text-2xl sm:text-3xl">Rudra</h1>
        </div>
      </div>
      <div className="text-center mt-4 sm:mt-2">
        <p className="text-sm sm:text-base md:px-20 pb-10">
          KGlobalTraders has been our trusted partner in international trade for years. Their commitment to excellence and seamless logistics solutions have made our import and export processes smoother than ever. The team at GlobalTraders is not only professional but also genuinely dedicated to our success. We highly recommend their services to anyone looking to expand their global trade ventures.
        </p>
      </div>
    </div>


    {/* <Footer /> */}
    </div>
  );
};

export default Home;
