import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
     <nav className="bg-gray-800 p-4 shadow-md text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">FakeStore</h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/users" className="hover:text-gray-300">Users</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/add-user" className="hover:text-gray-300">Add User</Link>
          <Link to="/add-product" className="hover:text-gray-300">Add Product</Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar