import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapContainer = (props) => {
  return (
    <GoogleMap
      mapContainerStyle={{
        height: "800px",
        width: "800px"
      }}
      zoom={11}
      center={{ lat: 34.0522, lng: -118.2437 }}
    >
      {props.stores.map(store => (
        <Marker
          key={store.id}
          position={{ lat: store.coordinates.latitude, lng: store.coordinates.longitude }}
        />
      ))}
    </GoogleMap>
  );
}

export default MapContainer;