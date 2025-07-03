import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {  // Define the function for the component
  const dummyProducts = [ // Example product data, replace it with your actual data
    { name: 'Product 1', price: 29.99, image: 'path_to_image_1' },
    { name: 'Product 2', price: 39.99, image: 'path_to_image_2' },
    // Add more products here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-700">No products added yet.</p>
        ) : (
          dummyProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
