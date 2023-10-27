import React from 'react';
import electronics from './images/Electronics.png';
import BC from './images/Beauty & Cosmetics.png';
import FB from './images/Food&Beverages.png';
import HM from './images/HeavyMachinery.jpeg';
import ED from './images/EdibleOils.png';
import Navbar from './navbar';
import Footer from './Footer';

const Product = ({ name, image, description }) => (
  <div className="border p-4 m-4 rounded-lg">
    <img src={image} alt={name} className="w-32 h-32" />
    <h3 className="text-xl font-semibold mt-2">{name}</h3>
    {/* <p className="text-gray-600 mt-2">{description}</p> */}
  </div>
);

const ProductList = () => {

  const exportProducts = [
    {
      name: 'Electronics',
      image: electronics,
    },

    {
        name: 'Electronics',
        image: BC,
        
      },

    {
        name: 'Food & Beverages',
        image: FB,
        
    },

    {
        name: 'Heavy Machinery',
        image: HM,
        
    },

    {
        name: 'Edible Oils',
        image: ED,
        
    },
   
  ];

  const importProducts = [
    {
        name: 'Electronics',
        image: electronics,
      },
  
      {
          name: 'Electronics',
          image: BC,
          
        },
  
      {
          name: 'Food & Beverages',
          image: FB,
          
      },
  
      {
          name: 'Heavy Machinery',
          image: HM,
          
      },
  
      {
          name: 'Edible Oils',
          image: ED,
          
      },
  ];

  return (
    <>
    <Navbar />
    <div className="text-center">
      <h2 className="text-2xl font-semibold my-4 text-start p-10">Export Products</h2>
      <div className="flex flex-wrap justify-center">
        {exportProducts.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
      <h2 className="text-2xl font-semibold my-4 text-end p-10">Extra...</h2>
      <h2 className="text-2xl font-semibold my-4 text-start p-10">Import Products</h2>
      <div className="flex flex-wrap justify-center">
        {importProducts.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
      <h2 className="text-2xl font-semibold my-4 text-end p-10">Extra...</h2>
    </div>
    <Footer />
    </>
  );
};

export default ProductList;
