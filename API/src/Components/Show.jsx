import React, { useState, useEffect } from "react";
import axios from "../utils/axios"; // Import axios instance

function Show() {
  const [products, setProducts] = useState([]); // State to manage product list
  const [singleProduct, setSingleProduct] = useState(null); // State for a single product

  // Function to fetch multiple products
  const getProducts = () => {
    const api = "https://fakestoreapi.com/products"; // API endpoint for all products
    axios
      .get(api)
      .then((res) => {
        console.log("Products fetched:", res.data);
        setProducts(res.data); // Update state with the fetched products
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  };

  // Function to fetch a single product
  const getSingleProduct = () => {
    axios
      .get('/products/1') // API endpoint for a single product
      .then((res) => {
        console.log("Single Product fetched:", res.data);
        setSingleProduct(res.data); // Update state with the fetched product
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  };

  // useEffect to fetch the products when the component mounts
  useEffect(() => {
    getProducts();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="p-5">
      {/* Button to fetch single product */}
      <button
        onClick={getSingleProduct}
        className="rounded px-5 py-2 bg-blue-500 text-white mr-4"
      >
        Fetch Single Product
      </button>
      {/* Button to fetch multiple products */}
      <button
        onClick={getProducts}
        className="rounded px-5 py-2 bg-green-500 text-white"
      >
        Fetch Products List
      </button>
      <br />
      <br />
      {/* Display fetched single product */}
      {singleProduct && (
        <div className="w-1/4 p-5 my-4 bg-blue-400 rounded-md">
          <h3>{singleProduct.title}</h3>
          <p>{singleProduct.description}</p>
          <p>Price: ${singleProduct.price}</p>
        </div>
      )}
      {/* Display list of products */}
      <ul className="mt-4 grid grid-cols-1 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <li
              key={product.id}
              className="p-4 bg-green-400 rounded-md text-white"
            >
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No products fetched yet.</li>
        )}
      </ul>
    </div>
  );
}

export default Show;
