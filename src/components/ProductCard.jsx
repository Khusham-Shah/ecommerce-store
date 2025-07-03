// import React from 'react';
// import ProductCard from '../components/ProductCard';

// const Product = () => {  // Define the function for the component
//   return (
//     <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-200 min-h-screen">
//       <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Featured Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {/* Placeholder Product Cards */}
//         <ProductCard
//           name="Product 1"
//           price={29.99}
//           // image="path_to_image_1"
//         />
//         <ProductCard
//           name="Product 2"
//           price={39.99}
//           // image="path_to_image_2"
//         />
//         <ProductCard
//           name="Product 3"
//           price={49.99}
//           // image="path_to_image_3"
//         />
//         <ProductCard
//           name="Product 4"
//           price={59.99}
//           // image="path_to_image_4"
//         />
//       </div>
//     </div>
//   );
// };

// export default Product;


import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={image || "https://via.placeholder.com/300x200?text=No+Image"}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-lg">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
