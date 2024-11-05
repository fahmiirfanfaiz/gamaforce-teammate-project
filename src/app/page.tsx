export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      {/* Navbar */}
      <nav className="bg-white p-4 shadow">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-600">GAMAFORCE</a>
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
