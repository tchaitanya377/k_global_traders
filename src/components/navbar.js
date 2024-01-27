import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from './images/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center relative z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-25 mx-5" />
      </div>
      <div className="md:hidden">
        {isMenuOpen ? (
          <div className="fixed top-0 left-0 h-screen w-screen bg-white p-4">
            <FiX
              className="text-purple-600 text-2xl cursor-pointer absolute top-4 right-4"
              onClick={toggleMenu}
            />
            <ul className="text-purple-600 space-y-4 text-center text-xl">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/collaborate">To Collaborate</Link></li>

              {/* <li><Link to="/testimonies">Testimonials</Link></li> */}
{/* 
              <Link to='/'>Home</Link>
              <Link to='/about'>about</Link>
              <Link to='/products'>Products</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/testimonials'>Testimonials</Link> */}
            </ul>
          </div>
        ) : null}
        <FiMenu
          className="text-purple-600 text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <div className="hidden md:flex items-center space-x-4 flex-grow justify-center text-xl">
        <Link to="/" className="text-purple-600 hover:text-#9F03FF px-7">Home</Link>
        <Link to="/about" className="text-purple-600 hover:text-#9F03FF px-7">About</Link>
        <Link to="/products" className="text-purple-600 hover:text-#9F03FF px-7">Products</Link>
        <Link to="/contact" className="text-purple-600 hover:text-#9F03FF px-7">Contact</Link>
        <Link to="/collaborate" className="text-purple-600 hover:text-#9F03FF px-7">To Collaborate</Link>


        {/* <Link to="/testimonies" className="text-purple-600 hover:text-#9F03FF px-7">Testimonials</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
