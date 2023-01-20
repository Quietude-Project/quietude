import axios from 'axios';
import React, { useState } from 'react';
import Modal from './Modal.jsx';
import { StarIcon } from '@heroicons/react/24/outline';
// import { StarIcon } from '@heroicons/react/24/solid';

const Store = ({
  currentUser,
  id,
  name,
  address,
  price,
  rating,
  imgURL,
  setShowMap,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isFav, setFav] = useState(false);

  // const handleFavorite = async (id) => {
  //   const response = await axios.post('/api/comments/create', { text: comment, store_id: id });
  //   console.log(response.data)
  // };

  const handleOpenModal = async () => {
    setModalActive(true);
    // setShowMap(false);
    getReviews();
  };

  const handleCloseModal = () => {
    setModalActive(false);
    // setShowMap(true)
  };

  const getReviews = async () => {
    const response = await axios.get(`/api/comments/${id}`);
    setReviews(response.data);
  };

  const handleClickFavorite = async () => {
    const user_id = localStorage.getItem('user_id');

    if (!isFav) {
      const response = await axios.patch('/api/users/favorites', {
        user_id,
        store_id: id,
        name,
        address,
        price,
        rating,
        imgURL,
      });
      console.log(response.data);
      setFav(true);
    } else {
      const delResponse = await axios.patch('/api/users/delete', {
        user_id,
        name,
      });

      console.log(delResponse.data);
      return setFav(false);
    }
  };

  return (
    <div className="bg-secondary-500 rounded-xl p-3 h-80 w-64 hover:bg-opacity-50">
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          handleFavorite(id);
        }}
      >
        STAR
      </button> */}
      <div className="flex justify-between mb-2">
        <div onClick={handleOpenModal} className="bg-primary-500 px-2 rounded-full text-secondary-500">?</div>
        {isFav ? (
          <StarIcon
            onClick={handleClickFavorite}
            className="h-6 w-6"
            fill="gold"
          />
        ) : (
          <StarIcon onClick={handleClickFavorite} className="h-6 w-6" />
        )}
      </div>
      {modalActive && (
        <Modal
          id={id}
          handleCloseModal={handleCloseModal}
          reviews={reviews}
          getReviews={getReviews}
        />
      )}
      <p className="text-xl -mt-2">{name}</p>
      <p className="flex justify-between">
        <span>
          <span className="underline mr-2">Rating:</span>
          {rating}
        </span>
        <span>
          <span className="underline font-bold mr-2">Price:</span>
          {price}
        </span>
      </p>
      <p>
        <span className="underline font-bold mr-2">Location:</span>
        {address}
      </p>
      <img src={imgURL} className="max-h-[180px] w-full rounded-xl mt-2" />
    </div>
  );
};

export default Store;
