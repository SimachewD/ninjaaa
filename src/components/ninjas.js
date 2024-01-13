// src/components/ninjas.js

import React, { useState, useEffect } from 'react';

const Ninjas = () => {
  const [ninjas, setNinjas] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/ninjas');
        const data = await response.json();
        setNinjas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return(
    <div>
      <h2>Available Ninjas</h2>
      <ul>
        {ninjas.map(ninja => (
          <li key={ninja.id} style={{ marginBottom: '8px' }}>
          <span style={{ marginRight: '58px' }}>{ninja.name}</span>
          <span>{ninja.rank}</span>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Ninjas;
