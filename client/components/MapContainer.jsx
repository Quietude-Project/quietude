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
          key: 'AIzaSyAgHtlMKlZWcQfI9wlF4KfD7FZPI-4tINk',
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

// export default React.memo(MapContainer)

// const MapContainer = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//   </GoogleMap>
// ))

// const MapContainer = props => {
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"

// const location = {
//   address: '1600 Amphitheatre Parkway, Mountain View, california.',
//   lat: 37.42216,
//   lng: -122.08427,
//   zoom: 11
// }

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 37.4419,
//   lng: -122.08427,
// };

// const { isLoaded } = useJsApiLoader({
//   id: 'google-map-script',
//   googleMapsApiKey: "AIzaSyAgHtlMKlZWcQfI9wlF4KfD7FZPI-4tINk"
// })

// const [map, setMap] = React.useState(null)

// const onLoad = React.useCallback(function callback(map) {
//   // This is just an example of getting and using the map instance!!! don't just blindly copy!
//   const bounds = new window.google.maps.LatLngBounds(center);
//   map.fitBounds(bounds);

//   setMap(map)
// }, [])

// const onUnmount = React.useCallback(function callback(map) {
//   setMap(null)
// }, [])

// return isLoaded ? (
//   <div className="map">
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={4}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       { /* Child components, such as markers, info windows, etc. */ }
//       <></>
//     </GoogleMap>
//   </div>
// ) : <></>
// };

// import React from "react";
// import GoogleMapReact from 'google-map-react';
// export default MapContainer;
