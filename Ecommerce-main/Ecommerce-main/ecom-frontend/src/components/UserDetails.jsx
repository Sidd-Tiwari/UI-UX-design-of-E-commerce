import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/users/${id}`).then((res) => setUser(res.data));
    }, [id]);
  
    if (!user) return <p>Loading...</p>;
  return (
    <>
       <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {user.name.firstname.toUpperCase()} {user.name.lastname.toUpperCase()}
        </h2>
        <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-600"><strong>Username:</strong> {user.username}</p>
        <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
        <p className="text-gray-600"><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
      </div>
    </div>
    </>
  )
}

export default UserDetails