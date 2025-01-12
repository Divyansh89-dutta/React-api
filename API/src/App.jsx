import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Show from "./Components/Show";
import Services from "./Components/Services";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <nav className="space-x-6">
            <Link
              to="/"
              className="text-lg font-medium hover:text-blue-200 transition"
            >
              Home
            </Link>
            <Link
              to="/show"
              className="text-lg font-medium hover:text-blue-200 transition"
            >
              Show
            </Link>
            <Link
              to="/services"
              className="text-lg font-medium hover:text-blue-200 transition"
            >
              Services
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Show />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>© 2025 My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
