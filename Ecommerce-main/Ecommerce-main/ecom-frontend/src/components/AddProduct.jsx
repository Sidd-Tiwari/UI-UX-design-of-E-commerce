import React from 'react'
import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://fakestoreapi.com/products", product);
      alert("Product added successfully!");
      setProduct({ title: "", price: "", category: "", image: "", description: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  return (
    <>
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="title" value={product.title} onChange={handleChange} placeholder="Product Title" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500" required />
          <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500" required />
          <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500" required />
          <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500" required />
          <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500" required />
          <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700">Add Product</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddProduct