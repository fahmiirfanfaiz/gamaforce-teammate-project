"use client";

import { MapContainer, TileLayer, Marker, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";
import "leaflet-draw/dist/leaflet.draw.css"

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const Map = () => {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => setHeight(`${window.innerHeight - 150}px`); 
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const ugmIcon = L.icon({
    iconUrl: "/images/logo-ugm.png", 
    iconSize: [50, 50], 
    iconAnchor: [25, 50], 
  });

  const _created = (e: any) => console.log(e);

  return (
    <MapContainer
      style={{ height: height, width: "100%" }}
      center={[-7.770717, 110.377945]}
      zoom={17}
      scrollWheelZoom={false}
    >
      <FeatureGroup>
        <div className="relative mt-[-2vw]">
          <EditControl
            position="bottomright"
            //className=""
            onCreated={_created}
            draw={
              {
                rectangle: true,
                circle: true,
                circlemarker: true,
                marker: true,
                polyline: true,
                }
            }
          />
        </div>
      </FeatureGroup>
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
