import React from 'react';
interface CardProps {
  title: string;
  price: number;
  image: string;
}

const Card = ({ title, price, image }: CardProps) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-40 object-contain mb-4" />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-blue-600 font-semibold">${price}</p>
    </div>
  );
};

export default Card;
