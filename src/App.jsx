import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]); // For multiple products
  const [singleProduct, setSingleProduct] = useState(null); // For single product

  // Function to fetch a single product
  const getProducts = () => {
    const api = "https://fakestoreapi.com/products/1";
    axios
      .get(api)
      .then((res) => {
        console.log("Single Product fetched:", res.data);
        setSingleProduct(res.data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  };

  // Function to add a new product
  const addProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api, {
        title: "New Product",
        price: 100,
        description: "New product description",
        category: "New product category",
        image: "New product image",
      })
      .then((res) => {
        console.log("Product added:", res.data);
        // Optionally add the product to the displayed list
        setProducts((prev) => [...prev, res.data]);
      })
      .catch((err) => {
        console.error("Error adding product:", err);
      });
  };

  return (
    <div className="pt-[5%] pl-[5%]">
      {/* Button to fetch single product */}
      <button onClick={getProducts} className="rounded px-5 py-5 bg-red-500">
        Call Product API
      </button>
      <br />
      <br />
      {/* Button to add product */}
      <button onClick={addProducts} className="rounded px-5 py-5 bg-red-500">
        Save New Product in API
      </button>
      <hr />
      {/* Display fetched single product */}
      {singleProduct && (
        <div className="w-1/4 p-5 my-4 bg-red-400 rounded-md">
          <h3>{singleProduct.title}</h3>
          <p>{singleProduct.description}</p>
          <p>Price: ${singleProduct.price}</p>
        </div>
      )}
      {/* Display list of all added products */}
      <ul className="mt-4">
        {products.length > 0 ? (
          products.map((product) => (
            <li
              key={product.id}
              className="w-1/4 p-5 mb-2 bg-green-400 rounded-md"
            >
              {product.title}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No products added yet.</li>
        )}
      </ul>
    </div>
  );
};

export default App;
