"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const Map = () => {
  const [height, setHeight] = useState("100vh"); 

  useEffect(() => {
    
    const updateHeight = () => setHeight(`${window.innerHeight - 150}px`); 

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <MapContainer
      style={{ height: height, width: "100%" }} // Use dynamic height here
      center={[-7.773401950856007, 110.3804542518012]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
