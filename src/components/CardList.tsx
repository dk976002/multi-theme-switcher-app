import React from 'react';
import { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}
/**
 * CardList component fetches and displays a list of product cards.
 * Data is fetched using Axios from the public FakeStore API.
 */
const CardList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

// Fetch the API endpoint from environment variables
  const urlPath = import.meta.env.VITE_API_URL;

  // Fetch product data when component mounts
  useEffect(() => {
    axios.get(urlPath)
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map(product => (
        <Card key={product.id} title={product.title} price={product.price} image={product.image} />
      ))}
    </div>
  );
};

export default CardList;
