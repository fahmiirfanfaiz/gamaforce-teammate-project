"use client";
import Image from "next/image";
import Button from "./components/Button";
import Map from "@/app/components/Map";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-400">
      <nav className="bg-white flex justify-between items-center p-4 shadow">
        <div className="flex items-center">
          <Image
            src="/images/gmfrc.png"
            alt="Gamaforce Logo"
            width={150}
            height={31.25}
          />
        </div>

        {/* Right side - Plan Mission and History Icon */}
        <div className="flex items-center space-x-2">
          {/* Clickable History Icon */}
          <button
            className="p-2 rounded hover:bg-gray-200"
            onClick={() => console.log('History button clicked')}
            aria-label="View History"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)" }}
              className="text-black ml-2"
            >
              <path d="M12 8v5h5v-2h-3V8z"></path>
              <path d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z"></path>
            </svg>
          </button>

          {/* Plan Mission Button */}
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Plan Mission
          </button>
        </div>
      </nav>

      <main className="flex-grow flex flex-col p-4">
        <div className="flex items-start mt-2">
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Plan Mission Manually
          </button>
        </div>

        {/* Map container */}
        <div className="relative w-full h-full mt-4">
          {/* Map component would go here */}

          {/* MapButtonGroup overlay */}
          <Button />
          <div className="relative w-full h-full mt-[1.5vw]">
          <Map />
        </div>
        </div>
      </main>
    </div>
  );
}
