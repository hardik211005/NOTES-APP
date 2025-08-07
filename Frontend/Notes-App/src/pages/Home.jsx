import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-gray-600 to-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Minimal Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 text-4xl opacity-5 animate-float">✍️</div>
        <div className="absolute top-40 right-1/4 text-3xl opacity-5 animate-float animation-delay-1000">📝</div>
        <div className="absolute bottom-40 left-1/3 text-4xl opacity-5 animate-float animation-delay-2000">💡</div>
        <div className="absolute bottom-20 right-1/3 text-3xl opacity-5 animate-float animation-delay-3000">⚡</div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className={`transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
        }`}>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-12 text-center max-w-5xl w-full">
            {/* Header Section */}
            <div className="mb-12">
              <div className="inline-block p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mb-8 transform hover:scale-110 transition-all duration-500 shadow-xl">
                <span className="text-5xl">📋</span>
              </div>
              <h1 className="text-7xl font-black bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent mb-8 leading-tight">
                Notify
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
                Transform your ideas into organized thoughts. Create, manage, and never lose track of your brilliant ideas again.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-3 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="font-medium">Secure & Private</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></span>
                  <span className="font-medium">Easy to Use</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse animation-delay-1000"></span>
                  <span className="font-medium">Always Accessible</span>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
                <h3 className="text-white font-bold mb-3 text-lg">Stay Organized</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Keep all your notes structured and easily searchable with our intuitive system</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">🔒</div>
                <h3 className="text-white font-bold mb-3 text-lg">Secure Access</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Your notes are protected with advanced encryption and secure authentication</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-white font-bold mb-3 text-lg">Lightning Fast</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Quick access to all your notes with optimized performance and instant sync</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/notes"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  <span className="flex items-center gap-3">
                    <span>✏️</span>
                    Create a New Note
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
                <Link
                  to="/notes"
                  className="group bg-gradient-to-r from-slate-700 to-gray-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-slate-600 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg border border-white/10"
                >
                  <span className="flex items-center gap-3">
                    <span>📚</span>
                    My Notes
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              </div>
              <p className="text-gray-400 text-sm">Start organizing your thoughts and ideas today</p>
            </div>

            {/* Stats Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">15K+</div>
                  <div className="text-gray-400 text-sm font-medium">Happy Users</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">75K+</div>
                  <div className="text-gray-400 text-sm font-medium">Notes Created</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-gray-400 text-sm font-medium">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
