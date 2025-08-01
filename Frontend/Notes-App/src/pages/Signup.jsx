import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault(); // page reload roke
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    // Baad mei yahan API call aayegi
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-200 to-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-emerald-400 rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-400 rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo/App name section */}
        <div className="text-center mb-6 mt-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl mb-3 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1">
            NotesApp
          </h1>
          <p className="text-gray-500 text-sm">Create your account to get started</p>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden">
          {/* Beautiful background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-white/20 to-teal-50/40"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-100/30 to-transparent rounded-tr-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Join NotesApp
            </h2>
            <div className="space-y-5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50/80 border border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all duration-300 text-gray-800 placeholder-gray-400"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50/80 border border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all duration-300 text-gray-800 placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50/80 border border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all duration-300 text-gray-800 placeholder-gray-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6 mb-6">
              <label className="flex items-start">
                <input type="checkbox" className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2 mt-1" />
                <span className="ml-3 text-sm text-gray-600 leading-5">
                  I agree to the 
                  <a href="#" className="text-emerald-600 hover:text-emerald-800 font-semibold ml-1 transition-colors duration-200">
                    Terms of Service
                  </a> and 
                  <a href="#" className="text-emerald-600 hover:text-emerald-800 font-semibold ml-1 transition-colors duration-200">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              Create Account
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account? 
                <a href="#" onClick={() => window.location.href = '/login'} className="text-emerald-600 hover:text-emerald-800 font-semibold ml-1 transition-colors duration-200">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-xs">
            Secure • Private • Always Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;