"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Map from "@/app/components/Map";
import { PlanMissionButton } from "./components/Button"; // Assuming Button is already defined

export default function Home() {
  const [latestCoordinates, setLatestCoordinates] = useState<{ lat: number; lng: number }[] | null>(null);

  // Handle click on the "Plan Mission" button
  const handlePlanMissionClick = () => {
    if (latestCoordinates) {
      console.log("Coordinates selected:", latestCoordinates);
      // Add logic here to save coordinates to the database
      // For example, send the coordinates to an API or update the state
      // fetch("/api/save-coordinates", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ coordinates: latestCoordinates }),
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log("Coordinates saved:", data);
      //   })
      //   .catch(error => {
      //     console.error("Error saving coordinates:", error);
      //   });
    } else {
      console.log("No coordinates selected yet.");
    }
  };

  return (
    <div className="relative z-0 pt-16">
      {/* Navbar */}
      <Navbar onPlanMissionClick={handlePlanMissionClick} />

      <main className="flex-grow flex flex-col min-h-screen bg-slate-400">
        {/* Map container */}
        <div className="relative w-full h-full z-0">
          {/* Map component */}
          <Map onCoordinateUpdate={(coords) => setLatestCoordinates([coords])} />
        </div>

        {/* Plan Mission Button */}
        <PlanMissionButton 
          onClick={handlePlanMissionClick} 
          latestCoordinates={latestCoordinates} 
          className="some-class"
        >
          Plan Mission
        </PlanMissionButton>
      </main>
    </div>
  );
}
