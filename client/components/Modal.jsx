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
      className="fixed inset-auto opacity-95 z-50 p-5 flex flex-col items-center justify-center gap-5 bg-primary-500 backdrop-blur-2xl rounded-xl"
    >
      <div
        onClick={handleCloseModal}
        className="self-end bg-secondary-500 text-primary-500 px-2 -mt-2 -mr-2 rounded-md cursor-pointer hover:bg-opacity-75"
      >
        x
      </div>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="bg-secondary-500 rounded-lg text-primary-500 py-1"
      />
      <button
        className="mb-2 bg-secondary-500 text-primary-500"
        // onClick={submitTask}
      >
        Add Comment
      </button>
      {reviews && (
        <div>
          {reviews?.map((review) => (
            <p className="text-secondary-500">{review.text}</p>
          ))}
        </div>
      )}
    </form>
  );
};

export default Modal;
