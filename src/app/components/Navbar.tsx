// components/Navbar.tsx
import React from "react";
import Image from "next/image";
import { PlanMissionButton } from "./Button";

interface NavbarProps {
  onPlanMissionClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onPlanMissionClick }) => {
  return (
    <nav className="bg-white fixed top-0 w-full z-50 flex justify-between items-center p-4 shadow">
      <div className="flex items-center">
        <Image
          src="/images/gmfrc.png"
          alt="Gamaforce Logo"
          width={150}
          height={31.25}
        />
      </div>

      <div className="flex items-center space-x-2">
        {/* <HistoryButton /> */}
        <PlanMissionButton
          onClick={onPlanMissionClick}
          className="bg-black text-white hover:bg-gray-300 hover:text-black px-4 py-2 rounded-lg"
        >
          Plan Mission
        </PlanMissionButton>
      </div>
    </nav>
  );
};

export default Navbar;
