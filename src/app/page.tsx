import Image from "next/image";
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
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Plan Mission
          </button>
        </div>
      </nav>

      <main className="flex-grow flex flex-col p-4">
        <div className="flex items-start mt-2">
          <button className="bg-black text-white px-5 py-2 rounded-lg">
            Plan Mission Manually
          </button>
        </div>

        <div className="relative w-full h-full mt-[1.5vw]">
          <Map />
        </div>
      </main>
    </div>
  );
}
