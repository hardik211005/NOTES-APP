import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-900 backdrop-blur-lg shadow-2xl border-b border-gray-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">
                NotesApp
              </h1>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-3">
            <a 
              href="/" 
              className="px-5 py-2.5 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 rounded-xl transition-all duration-300 font-medium backdrop-blur-sm border border-transparent hover:border-blue-400/30 group"
            >
              <span className="relative">
                Home
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </span>
            </a>
            <a 
              href="/login" 
              className="px-5 py-2.5 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 rounded-xl transition-all duration-300 font-medium backdrop-blur-sm border border-transparent hover:border-blue-400/30 group"
            >
              <span className="relative">
                Login
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </span>
            </a>
            <a 
              href="/signup" 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 rounded-xl transition-all duration-300 font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 border border-blue-400/20"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;