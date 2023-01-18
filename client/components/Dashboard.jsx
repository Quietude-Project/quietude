import React, { useState } from 'react';
import axios from 'axios';
import LocationSearch from './LocationSearch.jsx';
import MapContainer from './MapContainer.jsx';

const Dashboard = () => {
  const [location, setLocation] = useState([]);
  const searchCoffeeShops = async (location) => {
    try {
      console.log(location)
      const response = await axios.get(`http://localhost:3001/search?location=${location}&categories=coffee`,
        {
          headers: {
            Authorization: `Bearer KqmdPNyHvBAM9NyYYvYAqnnw0N367FN1UJ2vzgeDwVIKWVlFVr6XKDCmE-_xCP7UUkJzqehTpWjI5hm4NT3DwJ9kEDi7WDxeqU_Fc9Dlv0sTRGhBx3Q2kEcHUDHHY3Yx`,
          },
        }
      );
      console.log(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {/* <LocationSearch /> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchCoffeeShops(location);
        }}
      >
        <input onChange={(e) => setLocation(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Dashboard;
