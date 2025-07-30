import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">About Us</h1>
      <p className="text-lg mb-4">This demo app showcases multiple themes built with React, TypeScript, and Tailwind. It fetches product data from a public API and demonstrates responsive UI and theme switching.</p>
      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
        Learn More
      </button>
    </div>
  );
};

export default About;