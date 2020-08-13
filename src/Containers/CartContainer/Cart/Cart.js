import React, { useState, useRef } from 'react';
import { Map, Marker, TileLayer } from "react-leaflet";
import "./Cart.scss";

const Cart = () => {
  const [viewPort, setViewPort] = useState({center: [45.421532, -75.697189], zoom:9})
  const [markers, setMarkers] = useState([viewPort.center])
  const mapRef = useRef(null)
  const onViewPortChanged = (viewport) => {
    console.log("onViewPortChange", viewport)
    setMarkers([viewport.center])
    setViewPort(viewport)
  }
  return (
    <Map ref={mapRef}  viewport={viewPort} onViewportChanged={onViewPortChanged}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((position, idx) => (
        <Marker key={idx} position={position} />
      ))}
    </Map>
  );
}

export default Cart;
