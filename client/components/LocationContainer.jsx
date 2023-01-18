import React from "react";

const LocationContainer = props => {
  const { name, lat, lng } = props;

  return (
    <div>
      Name: {name}
    </div>
  )
};

export default LocationContainer;