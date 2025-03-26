import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
   

const Users = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get("https://fakestoreapi.com/users")
        .then(response => setUsers(response.data))
        .catch(error => console.log(error));
    }, []);
    
    const deleteUser = async (id) => {
      await axios.delete(`https://fakestoreapi.com/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    };

  return (
    <>
        <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center">Users List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="border p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {user.name.firstname.toUpperCase()} {user.name.lastname.toUpperCase()}
            </h3>
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
            <p className="text-gray-600"><strong>City:</strong> {user.address.city}</p>
            <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline mt-2 block">
              View Profile
            </Link>
            <div className="flex gap-4">
              <Link to={`/edit-user/${user.id}`} className="text-yellow-500 hover:underline">Edit</Link>
              <button onClick={() => deleteUser(user.id)} className="text-red-500 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Users