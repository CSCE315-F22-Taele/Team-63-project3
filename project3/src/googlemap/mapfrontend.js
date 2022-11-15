import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapFront = () => {
  
  const mapStyles = {        
    height: "75vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 35.65283, lng: 139.83947
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAwD6SbP7BI_UOU_M36kt8u-e4V4_q-1iw'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default MapFront;

// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function MapFront() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyAwD6SbP7BI_UOU_M36kt8u-e4V4_q-1iw',
//   });



//   if (!isLoaded) return <div>Loading...</div>;
//   return(
//     <>
//     <h1>Howdy guys</h1>
//     {Map()}
//     </>
    
    
//   );
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName={{width: '50%',height:'50%'}}>
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }