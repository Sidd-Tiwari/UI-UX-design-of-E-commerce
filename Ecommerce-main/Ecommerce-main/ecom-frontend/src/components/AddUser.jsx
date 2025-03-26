import React from 'react'
import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://fakestoreapi.com/users", user);
      alert("User added successfully!");
      setUser({ firstname: "", lastname: "", email: "", phone: "", city: "" });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
     <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="firstname" value={user.firstname} onChange={handleChange} placeholder="First Name" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          <input type="text" name="lastname" value={user.lastname} onChange={handleChange} placeholder="Last Name" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          <input type="text" name="city" value={user.city} onChange={handleChange} placeholder="City" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">Add User</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddUser