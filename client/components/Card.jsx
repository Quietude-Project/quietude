import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';

const Card = ({ name, address, price, rating, imgURL }) => {
  return (
    <div className="bg-secondary-500 rounded-xl p-3 h-80 w-64 hover:bg-opacity-75 shadow-2xl">
      <StarIcon className="h-6 w-6 ml-52" fill="gold" stroke="black" />
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

export default Card;
