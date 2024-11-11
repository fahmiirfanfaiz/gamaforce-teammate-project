// pages/page.tsx atau pages/index.tsx
"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Map from "@/app/components/Map";
import MissionManual from "./components/MissionManual";

export default function Home() {
  const [showMissionManual, setShowMissionManual] = useState(false);

  const handlePlanMissionClick = () => {
    setShowMissionManual(!showMissionManual);
  };

  return (
    <div className="relative z-0 pt-16">
      {/* Navbar with fixed position */}
      <Navbar onPlanMissionClick={handlePlanMissionClick} />

      <main className="flex-grow flex flex-col min-h-screen bg-slate-400">
        {/* Conditional rendering of MissionManual */}
        {showMissionManual && (
          <div className="mt-4">
            <MissionManual />
          </div>
        )}

        {/* Map container */}
        <div className="relative w-full h-full z-0">
          <Map />
        </div>
      </main>
    </div>
  );
}
