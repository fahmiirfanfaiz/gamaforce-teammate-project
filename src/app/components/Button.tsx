// components/Button.tsx
import React, { useState } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const PlanMissionButton: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [missionName, setMissionName] = useState("");

  const handlePlanMissionClick = () => {
    setIsFormVisible((prev) => !prev);
  };

  const handleMissionSubmit = () => {
    console.log("Mission submitted:", missionName);
    setMissionName("");
    setIsFormVisible(false);
  };

  return (
    <div className="relative">
      <button onClick={handlePlanMissionClick} className={className}>
        {children}
      </button>

      {isFormVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsFormVisible(false)}></div>
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg p-4 w-48 z-50">
            <input
              type="text"
              placeholder="Mission Name"
              className="border border-gray-300 rounded px-2 py-1 w-full mb-2 italic text-gray-400"
              value={missionName}
              onChange={(e) => setMissionName(e.target.value)}
            />
            <button onClick={handleMissionSubmit} className="bg-black text-white px-3 py-1 rounded w-full">
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export const HistoryButton: React.FC = () => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const handleHistoryClick = () => {
    setIsHistoryVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <button className="p-2 rounded hover:bg-gray-200" onClick={handleHistoryClick} aria-label="View History">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="black">
          <path d="M12 8v5h5v-2h-3V8z"></path>
          <path d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z"></path>
        </svg>
      </button>

      {isHistoryVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsHistoryVisible(false)}></div>
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg p-4 w-48 z-50">
            <div className="text-lg font-semibold">Mission History</div>
            <ul className="mt-2 space-y-2">
              <li className="p-2 bg-gray-100 rounded">Mission A</li>
              <li className="p-2 bg-gray-100 rounded">Mission Impossible</li>
              <li className="p-2 bg-gray-100 rounded">Mission to UGM</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
