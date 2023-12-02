// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css';
import './App.css';

const App = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=6&seed=abc');
        setUserList(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {userList.map((user, index) => (
          <div key={index} className="bg-white rounded-md overflow-hidden shadow-md p-8 animate__animated animate__fadeInUp">
            <div className="flex">
              <div className="w-1/3">
                <img className="w-full h-40 object-cover mb-4" src={user.picture.large} alt={`User ${index + 1}`} />
              </div>
              <div className="w-2/3 pl-4">
                <h2 className="font-bold text-xl mb-2">
                  {user.name.first} {user.name.last}
                </h2>
                <p className="text-gray-600">Gender: {user.gender}</p>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Phone: {user.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
