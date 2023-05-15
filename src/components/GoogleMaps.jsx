import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
};

const center = {
  lat: 38.009907153165834,
  lng: -122.27054174602735,
};

const GoogleMaps = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  // });

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);
  // return isLoaded ? (
  //   <GoogleMap
  //     mapContainerStyle={containerStyle}
  //     center={center}
  //     zoom={10}
  //     onLoad={onLoad}
  //     onUnmount={onUnmount}
  //   >
  //     <Marker position={center} />
  //   </GoogleMap>
  // ) : (
  //   <></>
  // );
};

export default GoogleMaps;
