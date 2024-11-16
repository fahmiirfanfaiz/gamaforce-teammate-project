import React, { useState } from "react";

interface Coordinates {
  lat: number;
  lng: number;
}

interface ButtonProps {
  latestCoordinates?: Coordinates[]; // Koordinat dari klik pengguna di Leaflet
  onClick: () => void;
  className: string;
  children?: React.ReactNode;
}

export const PlanMissionButton: React.FC<ButtonProps> = ({
  latestCoordinates = [], // Default ke array kosong untuk menghindari undefined
  className,
  children,
  onClick,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [missionName, setMissionName] = useState("");

  // Toggle visibility of the mission form
  const handlePlanMissionClick = () => {
    setIsFormVisible((prev) => !prev);
    if (onClick) {
      onClick();
    }
  };

  // Submit mission details
  const handleMissionSubmit = async () => {
    console.log("Latest Coordinates:", latestCoordinates);
    console.log("Mission Name:", missionName);

    if (!missionName.trim()) {
      alert("Mission name cannot be empty!");
      return;
    }

    if (!latestCoordinates || latestCoordinates.length === 0) {
      alert("No coordinates available!");
      return;
    }

    // Construct GeoJSON data
    const geoJSONData = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString", // Gunakan LineString untuk jalur
            coordinates: latestCoordinates.map((coord) => [coord.lng, coord.lat]), // Format GeoJSON [lng, lat]
          },
          properties: {
            name: missionName,
          },
        },
      ],
    };

    console.log("GeoJSON Data:", geoJSONData); // Debugging purpose

    try {
      // Send the mission data to your backend API
      const response = await fetch("http://localhost:3000/api/missions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(geoJSONData),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Failed to save mission: ${response.statusText}`);
      }

      console.log("Mission saved successfully!");
      alert("Mission saved successfully!");

      // Reset form after submission
      setMissionName("");
      setIsFormVisible(false);
    } catch (error) {
      console.error("Error saving mission:", error);
      alert("Failed to save mission. Please try again.");
    }
  };

  return (
    <div className="relative">
      {/* Button untuk membuka form */}
      <button onClick={handlePlanMissionClick} className={className}>
        {children}
      </button>

      {/* Form untuk memasukkan nama misi */}
      {isFormVisible && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsFormVisible(false)}
          ></div>
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg p-4 w-48 z-50">
            <input
              type="text"
              placeholder="Mission Name"
              className="border border-gray-300 rounded px-2 py-1 w-full mb-2 text-black"
              value={missionName}
              onChange={(e) => setMissionName(e.target.value)}
            />
            <button
              onClick={handleMissionSubmit}
              disabled={!missionName.trim()}
              className="bg-black hover:bg-gray-300 hover:text-black text-white px-3 py-1 rounded w-full"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};
