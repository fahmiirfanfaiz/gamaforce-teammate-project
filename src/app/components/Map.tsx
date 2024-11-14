import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import './styles/map.css';
import { PlanMissionButton } from "./Button"; // Import the button

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

interface MapProps {
  onCoordinateUpdate: (coords: { lat: number; lng: number } | { lat: number; lng: number }[]) => void;
}

const Map: React.FC<MapProps> = ({ onCoordinateUpdate }) => {
  const [mapHeight, setMapHeight] = useState(window.innerHeight);
  const [geoJSONData, setGeoJSONData] = useState<any[]>([]);

  // Handle created layers
  const _created = (e: any) => {
    const { layerType, layer } = e; // layerType: jenis layer (e.g., 'polygon', 'polyline', 'rectangle', 'circle')
    const { _leaflet_id } = layer; // _leaflet_id: id dari layer yang baru dibuat
    const newGeoJSON = layer.toGeoJSON(); // Mendapatkan data GeoJSON dari layer yang baru dibuat
    newGeoJSON.properties.id = _leaflet_id; // Menambahkan id ke data GeoJSON
    setGeoJSONData((prev) => [...prev, newGeoJSON]); // Menyimpan data GeoJSON di state

    // Mengambil koordinat dari objek yang dibuat
    const coordinates = layer.getLatLngs();
    onCoordinateUpdate(coordinates);
  };

  // Handle edited layers
  const _edited = (e: any) => {
    console.log("Layer edited:", e.layers.toGeoJSON());
    // Optionally handle updates to the edited coordinates
  };

  // Handle deleted layers
  const _deleted = (e: any) => {
    console.log("Layer deleted:", e.layers.toGeoJSON());
    // Optionally handle the deletion of coordinates
  };

  const ugmIcon = L.icon({
    iconUrl: "/images/logo-ugm.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  return (
    <div className="relative">
      <MapContainer
        className="w-screen h-screen"
        center={[-7.770717, 110.377945]}
        zoom={17}
        scrollWheelZoom={true}
        style={{ height: mapHeight }}
      >
        <FeatureGroup>
          <EditControl
            position="bottomright"
            onCreated={_created}
            onEdited={_edited}
            onDeleted={_deleted}
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
    </div>
  );
};

export default Map;
