import Image from "next/image"

export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      {/* Navbar */}
      <nav className="bg-white p-4 shadow">
        <ul className="flex space-x-4">
          <li>
            {/* <a href="#" className="text-gray-800 hover:text-gray-600">GAMAFORCE</a> */}
            <Image
                src="/images/logo-gamaforce.png" // Path to the logo image
                alt="Gamaforce Logo"
                width={150} // Set width of the logo
                height={50} // Set height of the logo
              />
          </li>
        </ul>
      </nav>

      {/* Main content area */}
      <main className="flex-grow">
        {/* Content will go here */}
      </main>
    </div>
  );
}

