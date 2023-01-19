import axios from 'axios';
import React, { useState } from 'react';
import Modal from './Modal.jsx';

const Store = ({ id, name, address, price, rating, imgURL, setShowMap }) => {
  const [modalActive, setModalActive] = useState(false);
  const [reviews, setReviews] = useState([])

  // const handleFavorite = async (id) => {
  //   const response = await axios.post('/api/comments/create', { text: comment, store_id: id });
  //   console.log(response.data)
  // };

  const handleOpenModal = async () => {
    setModalActive(true);
    // setShowMap(false);
    const response = await axios.get(`/api/comments/${id}`)
    setReviews(response.data)
  };

  const handleCloseModal = () => {
    setModalActive(false);
    // setShowMap(true)
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
      <div onClick={handleOpenModal}>?</div>
      {modalActive && (
        <Modal
          id={id}
          handleCloseModal={handleCloseModal}
          reviews={reviews}
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
