import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(
        "https://fakestoreapi.com/products"
    ).then((res) => setProducts(res.data));
  }, []);
  const deleteProduct = async (id) => {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    setProducts(products.filter(product => product.id !== id));
  };
  return (
    <>
       <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <div className="flex justify-between mt-2">
              <Link to={`/products/${product.id}`} className="p-1.5 rounded-xl hover:cursor-pointer border-2 border-blue-500 bg-white text-red text-blue-500">View</Link>
              <Link to={`/edit-product/${product.id}`} className="p-1.5 rounded-xl hover:cursor-pointer border-2 border-yellow-500 bg-white text-red text-yellow-500">Edit</Link>
              <button onClick={() => deleteProduct(product.id)} className="p-1.5 rounded-xl hover:cursor-pointer border-2 border-red-500 bg-white text-red text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Products