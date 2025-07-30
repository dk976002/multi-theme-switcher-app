import React from 'react';
import CardList from '../components/CardList';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Welcome to Our Store</h1>
      <p className="text-lg mb-4">Browse our selection of great products below. Choose a theme to change how the page looks and feels!</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
        Explore More
      </button>
      <CardList />
    </div>
  );
};

export default Home;
