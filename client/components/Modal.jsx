import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ id, handleCloseModal, reviews }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (id) => {
    const response = await axios.post('/api/comments/create', {
      text: comment,
      store_id: id,
    });
    setComment('');
    // console.log(response.data);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(id);
      }}
      className="fixed inset-48 flex flex-col items-center justify-center gap-5 py-2 pl-4 bg-secondary-500 backdrop-blur-2xl rounded-xl"
    >
      <div
        onClick={handleCloseModal}
        className="self-end bg-primary-500 text-secondary-500 px-2 mr-3 mt-1 rounded-md cursor-pointer hover:bg-opacity-75"
      >
        x
      </div>
      <label className="text-primary-500">
        Comment:
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="bg-primary-500 ml-3 rounded-lg px-3 text-secondary-500"
        />
      </label>
      <button
        className="py-1 mb-3"
        // onClick={submitTask}
      >
        Add Comment
      </button>
      {reviews?.map((review) => (
        <p>{review.text}</p>
      ))}
    </form>
  );
};

export default Modal;
