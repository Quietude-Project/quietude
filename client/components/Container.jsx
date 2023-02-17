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
      center={{ lat: props.geocode.lat, lng: props.geocode.lng }}
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