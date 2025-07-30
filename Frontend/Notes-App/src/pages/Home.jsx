import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Notes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 text-6xl opacity-10 animate-float">📝</div>
        <div className="absolute top-40 right-1/4 text-4xl opacity-10 animate-float animation-delay-1000">✨</div>
        <div className="absolute bottom-40 left-1/3 text-5xl opacity-10 animate-float animation-delay-2000">💡</div>
        <div className="absolute bottom-20 right-1/3 text-3xl opacity-10 animate-float animation-delay-3000">🚀</div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className={`transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-12 text-center max-w-4xl w-full">
            {/* Header Section */}
            <div className="mb-12">
              <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 transform hover:scale-110 transition-transform duration-300">
                <span className="text-6xl">✍️</span>
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 leading-tight">
                NotesApp
              </h1>
              <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed">
                Transform your ideas into organized thoughts. Create, manage, and never lose track of your brilliant ideas again.
              </p>
              <div className="flex justify-center items-center gap-6 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span>Easy to Use</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                  <span>Always Accessible</span>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-white font-semibold mb-2">Stay Organized</h3>
                <p className="text-white/70 text-sm">Keep all your notes structured and easily searchable</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-white font-semibold mb-2">Secure Access</h3>
                <p className="text-white/70 text-sm">Your notes are protected with secure authentication</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
                <p className="text-white/70 text-sm">Quick access to all your notes whenever you need them</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-6">
              {isLoggedIn ? (
                <div className="space-y-4">
                  <Link
                    to="/notes"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                  >
                    <span className="flex items-center gap-3">
                      <span>📚</span>
                      Go to My Notes
                      <span>→</span>
                    </span>
                  </Link>
                  <p className="text-white/60 text-sm">Welcome back! Ready to continue your work?</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      to="/login"
                      className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                    >
                      <span className="flex items-center gap-3">
                        <span>🔐</span>
                        Login
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </Link>
                    <Link
                      to="/signup"
                      className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                    >
                      <span className="flex items-center gap-3">
                        <span>✨</span>
                        Get Started
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </Link>
                  </div>
                  <p className="text-white/60 text-sm">Join thousands of users organizing their thoughts daily</p>
                </div>
              )}
            </div>

            {/* Stats Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 divide-x divide-white/10">
                <div className="px-4">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-white/60 text-sm">Happy Users</div>
                </div>
                <div className="px-4">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-white/60 text-sm">Notes Created</div>
                </div>
                <div className="px-4">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-white/60 text-sm">Uptime</div>
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
