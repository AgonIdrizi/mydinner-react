import React, { useState, useRef } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import "./LeafletMap.scss";

const LeafletMap = ({ latLon, handleDeliveryAddressChange }) => {
  const [viewPort, setViewPort] = useState({
    center: [latLon[0], latLon[1]],
    zoom: 14
  });
  const [markers, setMarkers] = useState([viewPort.center]);
  const mapRef = useRef(null);
  const onViewPortChanged = viewport => {
    console.log("onViewPortChange", viewport);
    setMarkers([viewport.center]);
    setViewPort(viewport);
    handleDeliveryAddressChange(viewport.center);
  };
  return (
    <Map ref={mapRef} viewport={viewPort} onViewportChanged={onViewPortChanged}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((position, idx) => (
        <Marker key={idx} position={position} />
      ))}
    </Map>
  );
};

export default LeafletMap;
