import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Component } from 'react';
// import { GoogleMap } from "@react-google-maps/api";
// import { useJsApiLoader } from "@react-google-maps/api";
// import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import pin from '../Images/map-pin.png';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

import LocationSearch from './LocationSearch.jsx';

const Pin = ({ src }) => <img className="h-7 w-7" src={src}></img>;

const MapContainer = ({ stores }) => {
  const defaultProps = {
    center: {
      lat: 37.773972,
      lng: -122.431297,
    },
    zoom: 17,
  };

  console.log(stores);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: /* Google API Key */,
          libraries: 'places',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Pin
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          src={pin}
        />
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
