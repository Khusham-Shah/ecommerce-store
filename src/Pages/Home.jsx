import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 shadow-2xl">Welcome to MyStore</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6">Your favorite online shop</p>
      <Link to="/products" className="bg-slate-900 hover:bg-slate-900 text-white py-2 px-4 rounded text-lg">
        Browse Products
      </Link>
    </div>
  );
};

export default Home;
