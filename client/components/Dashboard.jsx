import React, { useState } from 'react';
import axios from 'axios';
import Store from './Store.jsx';
import LocationSearch from './LocationSearch.jsx';
import MapContainer from './MapContainer.jsx';

const Dashboard = () => {
  // /api/locations/search?location=${location}&categories=coffee

  const [location, setLocation] = useState('');
  const [stores, setStores] = useState([]);
  const searchCoffeeShops = async (location) => {
    try {
      const response = await axios.get(`/api/locations/?location=${location}`);
      console.log('HERE', response.data);
      setStores(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // stores.map(store => <div>{store.name}</div>)

  return (
    <div className=" flex h-screen w-screen flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchCoffeeShops(location);
        }}
      >
        <input
          onChange={(e) => setLocation(e.target.value)}
          className="bg-secondary-500 rounded-lg py-1 px-4"
        />
        <button>Search</button>
      </form>
      {/* <MapContainer stores={stores}/> */}
      <div className='flex'>
        <div className="grid grid-cols-1 gap-2 mt-4 h-2/4 overflow-y-auto">
          {stores?.map((store) => (
            <Store
              key={store.id}
              name={store.name}
              address={store.location.address1}
              imgURL={store.image_url}
            />
          ))}
        </div>
        <div><MapContainer /></div>
        
      </div>
    </div>
  );
};

export default Dashboard;
