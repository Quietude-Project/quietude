import React, { useState } from 'react';
import axios from 'axios';
import Store from './Store.jsx';
import LocationSearch from './LocationSearch.jsx';
import Container from './Container.jsx';

const Dashboard = () => {
  // /api/locations/search?location=${location}&categories=coffee
  const GOOGLE_API_KEY = 'AIzaSyAgHtlMKlZWcQfI9wlF4KfD7FZPI-4tINk';

  const [location, setLocation] = useState('');
  const [stores, setStores] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [geocode, setGeocode] = useState({ lat: 34.0522, lng: -118.2437 })

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
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          searchCoffeeShops(location);
          setShowMap(true);
        }}
        className="mt-20"
      >
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-secondary-500 rounded-lg py-1 px-4"
        />
        <button>Search</button>
      </form> */}
      <LocationSearch searchCoffeeShops={searchCoffeeShops} setShowMap={setShowMap} setLocation={setLocation} setGeocode={setGeocode}/>
      {/* <Container stores={stores}/> */}
      {/* <MapContainer stores={stores}/> */}
      {stores && (
        <div className="flex h-5/6 gap-2">
          <div className="grid grid-cols-3 gap-1 mt-4 overflow-y-auto">
            {stores?.map((store) => (
              <Store
                key={store.id}
                id={store.id}
                name={store.name}
                price={store.price}
                rating={store.rating}
                address={store.location.address1}
                imgURL={store.image_url}
                setShowMap={setShowMap}
              />
            ))}
          </div>
          {showMap && (
            <div className='mt-4'>
              <Container stores={stores} geocode={geocode}/>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
