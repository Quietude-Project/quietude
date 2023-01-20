import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

const Favorites = () => {
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    const user_id = localStorage.getItem('user_id');
    const response = await axios.get(`/api/users/favorites/${user_id}`);
    console.log('HERELOLOL', response.data)
    setUserFavorites(response.data);
  };

  console.log('current favorites: ', userFavorites)

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-primary-500 underline">{userFavorites.username}'s Favorites</h1>
      <div className="grid grid-cols-4 gap-8 overflow-y-auto mt-10">
        {userFavorites.favorites?.map((store, idx) => (
          <Card
            key={idx}
            name={store.name}
            address={store.address}
            price={store.price}
            rating={store.rating}
            imgURL={store.imgURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
