// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css'; // Import animate.css
import './App.css'; // You can import Tailwind CSS here if using

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {userData && (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md animate__animated animate__fadeInUp">
          <img
            className="w-full h-64 object-cover animate__animated animate__fadeIn"
            src={userData.picture.large}
            alt="User"
          />
          <div className="p-6">
            <h2 className="font-bold text-xl mb-2 animate__animated animate__fadeIn">
              {userData.name.first} {userData.name.last}
            </h2>
            <p className="text-gray-600 animate__animated animate__fadeIn">{userData.email}</p>
            <p className="text-gray-600 animate__animated animate__fadeIn">{userData.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
