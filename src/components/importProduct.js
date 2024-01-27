import { Link } from 'react-router-dom';
import electronics from './images/Electronics.png';
import BC from './images/Beauty & Cosmetics.png';
import FB from './images/Food&Beverages.png';
import HM from './images/HeavyMachinery.jpeg';
import ED from './images/EdibleOils.png';
import Iot from './images/IoT.jpg';
import MD from './images/Medical.jpeg';
import Navbar from './navbar';
import Footer from './Footer';

const ImportProduct = () => {
  const Product = ({ name, image, description }) => (
    <div className="border p-4 m-4 rounded-lg">
      <img src={image} alt={name} className="w-96 h-60" />
      <h3 className="text-xl font-semibold mt-2">{name}</h3>
    </div>
  );

  const importProducts = [
    {
      name: 'Electronics',
      image: electronics,
    },
    {
      name: 'IoT',
      image: Iot,
    },
    {
      name: 'Medical device',
      image: MD,
    },
    {
      name: 'Beauty & Cosmetics',
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
      <div className="flex justify-between">
      <h2 className="text-2xl font-semibold my-4 text-start p-10">Import Products</h2>
      <Link to="/Products" className='bg-purple-600 text-white space-y-4 text-center text-lg h-14 p-3 md:m-4 round-md rounded-lg'>Export Products --></Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {importProducts.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
      <h2 className="text-2xl font-semibold my-4 text-end p-10">etc.,</h2>
      {/* <Footer /> */}
    </>
  );
};

export default ImportProduct;
