import axios from '../utils/axios';
import React, { useState } from 'react';

function Services() {
  const [title, setTitle] = useState('services');
  const [description, setDescription] = useState('this service is great');

  const handleButtonClick = () => {
    setTitle('Updated Services');
    setDescription('This service has been updated.');
  };
  const getUser = () => {
    axios
      .get('/users')
      .then((res) => {
        console.log("Products fetched:", res.data);
        setProducts(res.data); // Update state with the fetched products
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  };


  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button 
        className="p-4 rounded-md bg-blue-200 hover:bg-blue-300 transition-colors" 
        onClick={handleButtonClick}
      >
        Change Normal Data
      </button>
    </div>
  );
}

export default Services;
