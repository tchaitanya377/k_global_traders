import React from 'react';
import electronics from './images/Electronics.png';
import BC from './images/Beauty & Cosmetics.png';
import FB from './images/Food&Beverages.png';
import HM from './images/HeavyMachinery.jpeg';
import ED from './images/EdibleOils.png';
import Navbar from './navbar';
import Footer from './Footer';
import chilles from './images/RedChillies.jpg'
import ElectronicProducts from './images/ElectronicProducts.png';
import Tshirt from './images/Tshirts.jpg';
// import Spices from './images/Spices.jpg';
import Saffron from './images/Saffron.jpg';
import RedChilli from './images/RedChilli.jpg';
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
import { Link } from 'react-router-dom';


const Product = ({ name, image, description }) => (
  <div className="border p-4 m-4 rounded-lg">
    <img src={image} alt={name} className="w-96 h-60" />
    <h3 className="text-xl font-semibold mt-2">{name}</h3>
    {/* <p className="text-gray-600 mt-2">{description}</p> */}
  </div>
);

const ProductList = () => {

  const exportProducts = [
    {
      name: 'Paraboiled Rice',
      image: ParaboiledRice,
    },

   
    {
      name: 'Basmati Rice',
      image: rice,
    },

    {
      name: 'Non Basmati Rice',
      image: NonBasmatiRice,
    },
    {
      name: 'Red Chillies',
      image: chilles,
      
    },

    {
      name: 'Electronic Products',
      image: ElectronicProducts,
      
  },
  {
    name: 'Electrical Safety equipments',
    image: ElectricalSafetyequipmentss,
  },

    {
        name: 'T shirts',
        image: Tshirt,
        
      },

    // {
    //     name: 'Spices',
    //     image: Spices,
        
    // },

    {
      name: 'Saffron',
      image: Saffron,
      
  },

{
  name: 'Bay Leaves',
  image: BayLeaves,
  
},
{
  name: 'Turmeric',
  image: Turmeric,
  
},
{
  name: 'Cloves',
  image: Cloves,
  
},
{
  name: 'Cinnamon',
  image: Cinnamon,
  
},

{
  name: 'Cardamom',
  image: Cardamom,
  
},

{
  name: 'Black Pepper',
  image: BlackPepper,
  
},

{
  name: 'Mustard',
  image: Mustard,
  
},

{
  name: 'Cumin',
  image: Cumin,
  
},

{
  name: 'Coriander',
  image: Coriander,
  
},

    {
        name: 'Dry Fruits',
        image: DryFruit,
        
    }, 
  ];


  return (
    <>
    <Navbar />
    <div className="text-center">
      <div className="flex justify-between">
      <h2 className="text-2xl font-semibold my-4 text-start p-10">Export Products</h2>
      <Link to="/importProducts" className='bg-purple-600 text-white space-y-4 text-center text-lg h-14 p-3 md:m-4 round-md rounded-lg'>Import Products --></Link>
      </div>
      

      <div className="flex flex-wrap justify-center">
        {exportProducts.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
      <h2 className="text-2xl font-semibold my-4 text-end p-10">etc.,</h2>
    </div>
    {/* <Footer /> */}
    </>
  );
};

export default ProductList;
