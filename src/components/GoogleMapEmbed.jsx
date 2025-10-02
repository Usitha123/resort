// GoogleMapEmbed.jsx
import React from 'react';
import MapView from './MapView';

const GoogleMapEmbed = ({ showLocationInfo = true, showDirections = true, height = "500px" }) => {
  return (
    <MapView 
      showLocationInfo={showLocationInfo}
      showDirections={showDirections}
      height={height}
    />
  );
};

export default GoogleMapEmbed;
