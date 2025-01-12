import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home';
import User from '../components/User';
import About from '../components/About';
import Userdetail from '../components/Userdetail';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MyApp</h1>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors">
              Home
            </Link>
            <Link to="/user" className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors">
              User
            </Link>
            <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<Userdetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
