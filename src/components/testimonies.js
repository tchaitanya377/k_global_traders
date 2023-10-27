import React from 'react';
import user from './images/user.png';
import Navbar from './navbar';
import Footer from './Footer';
const Testimonies = () => {
  return (
    <>
        <Navbar />
        <div className="border border-black rounded-lg p-4 md:m-20 m-5">
      <div className="flex items-center mb-4">
        <img
          src={user}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <h3 className="text-xl font-semibold">John Doe</h3>
      </div>

      <p className="text-gray-600">
        "KGlobalTrades has been our trusted partner in international trade for years. Their commitment to excellence and seamless logistics solutions have made our import 
        and export processes smoother than ever. The team at GlobalTrades is not only professional but also genuinely dedicated to our success. We highly recommend their 
        services to anyone looking to expand their global trade ventures."
      </p>
    </div>

    <Footer />
    </>
  );
};

export default Testimonies;
