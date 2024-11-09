"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";

const Map = () => {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    // Set initial height and adjust on window resize
    const updateHeight = () => setHeight(`${window.innerHeight - 150}px`);

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Buat ikon khusus untuk logo UGM
  const ugmIcon = L.icon({
    iconUrl: "/images/logo-ugm.png", // Path logo UGM di folder public
    iconSize: [50, 50], // Sesuaikan ukuran ikon
    iconAnchor: [25, 50], // Menentukan titik tengah bawah gambar sebagai titik jangkar
  });

  return (
    <MapContainer
      style={{ height: height, width: "100%" }}
      center={[-7.770717, 110.377945]}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Tambahkan Marker dengan ikon UGM */}
      <Marker position={[-7.770717, 110.377945]} icon={ugmIcon} />
    </MapContainer>
  );
};

export default Map;
