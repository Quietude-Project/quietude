import React from 'react';

const Store = ({ name, address, imgURL }) => {
  return (
    <div className="bg-secondary-500 rounded-xl p-3">
      <p className="text-xl">{name}</p>
      <p>{address}</p>
      <img src={imgURL} className="h-2/4 w-3/4"/>
    </div>
  );
};

export default Store;
