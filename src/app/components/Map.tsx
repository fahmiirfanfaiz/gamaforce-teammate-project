import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import './styles/map.css';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const Map = () => {
  const [mapHeight, setMapHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setMapHeight(window.innerHeight); // Update the map height based on the inner height of the window
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ugmIcon = L.icon({
    iconUrl: "/images/logo-ugm.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  const _created = (e: any) => console.log(e);

  return (
    <MapContainer
      className="w-screen h-screen"
      center={[-7.770717, 110.377945]}
      zoom={17}
      scrollWheelZoom={true}
    >
      <FeatureGroup>
        <EditControl
            position="bottomright"
            onCreated={_created}
            draw={{
            rectangle: true,
            circle: true,
            circlemarker: true,
            marker: true,
            polyline: true,
          }}
        />
      </FeatureGroup>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-7.770717, 110.37779]} icon={ugmIcon} />
    </MapContainer>
  );
};

export default Map;
