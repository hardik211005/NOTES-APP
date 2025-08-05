import React, {useState,useEffect} from 'react';
import { useAuth } from '../Context/AuthContext'; 

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

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
            {!isAuthenticated ? (
              <>
                <a href="/" className="px-5 py-2.5 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 rounded-xl transition-all duration-300 font-medium backdrop-blur-sm border border-transparent hover:border-blue-400/30 group">
                  <span className="relative">Home</span>
                </a>
                <a href="/login" className="px-5 py-2.5 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 rounded-xl transition-all duration-300 font-medium backdrop-blur-sm border border-transparent hover:border-blue-400/30 group">
                  <span className="relative">Login</span>
                </a>
                <a href="/signup" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 rounded-xl transition-all duration-300 font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 border border-blue-400/20">
                  Get Started
                </a>
              </>
            ) : (
              <>
                <a href="/" className="flex items-center px-4 py-2.5 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 rounded-xl transition-all duration-300 font-medium backdrop-blur-sm border border-transparent hover:border-blue-400/30 group">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  <span className="relative">Home</span>
                </a>

                <div className="relative group">
                  <button className="flex items-center space-x-3 px-3 py-2.5 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 rounded-xl transition-all duration-300 font-medium backdrop-blur-sm border border-transparent hover:border-blue-400/30">
                    <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/20">
                      {user?.profilePicture ? (
                        <img src={user.profilePicture} alt={user.name || 'Profile'} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <span className="text-white font-semibold text-sm">
                          {getInitials(user?.name || user?.username || user?.email)}
                        </span>
                      )}
                    </div>
                    <span className="hidden md:block text-sm font-medium">{user?.name || user?.username || 'User'}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  <div className="absolute right-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      <div className="px-4 py-3 border-b border-gray-700/50">
                        <p className="text-sm font-semibold text-white truncate">{user?.name || user?.username || 'User'}</p>
                        <p className="text-xs text-gray-400 truncate">{user?.email || 'No email'}</p>
                      </div>
                      <a href="/" className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-blue-500/20 transition-colors duration-200">
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        Home
                      </a>
                      <button onClick={logout} className="flex items-center w-full px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-colors duration-200">
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
