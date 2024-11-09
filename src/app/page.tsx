"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Map from "@/app/components/Map";
import MissionManual from "./components/MissionManual";

export default function Home() {
  const [showMissionManual, setShowMissionManual] = useState(false);

  const handlePlanMissionClick = () => {
    setShowMissionManual(!showMissionManual);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-400">
      <Navbar onPlanMissionClick={handlePlanMissionClick} />

      <main className="flex-grow flex flex-col">
        {/* Conditional rendering of MissionManual */}
        {showMissionManual && (
          <div className="mt-4">
            <MissionManual />
          </div>
        )}

        {/* Map container */}
        <div className="relative w-full h-full">
          <Button />
          <div className="relative w-full h-full">
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
}
