import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(
        `https://fakestoreapi.com/products/${id}`
    ).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;
  return (
    <>
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <img src={product.image} alt={product.title} className="h-60 w-full object-contain mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-green-600">${product.price}</p>
      </div>
    </div>
    </>
  )
}

export default ProductDetails