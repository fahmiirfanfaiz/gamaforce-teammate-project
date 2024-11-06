import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-400">
      {/* Navbar */}
      <nav className="bg-white flex justify-between items-center p-4 shadow">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Image
            src="/images/gmfrc.png" // Path to your logo image
            alt="Gamaforce Logo"
            width={150}
            height={31.25}
          />
        </div>

        {/* Right side - Plan Mission Button */}
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Plan Mission
          </button>
        </div>
      </nav>

      {/* Main content area */}
      <main className="flex-grow flex flex-col p-4">
        {/* Plan Mission Manually button below the logo, aligned to the bottom left */}
        <div className="flex items-start mt-2">
          <button className="bg-black text-white px-5 py-2 rounded-lg">
            Plan Mission Manually
          </button>
        </div>

        {/* Map container */}
        <div className="relative w-full h-full mt-4">
          {/* Your map component would go here */}
        </div>
      </main>
    </div>
  );
}
