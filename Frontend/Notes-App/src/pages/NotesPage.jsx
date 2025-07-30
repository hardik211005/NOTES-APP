import React, { useEffect, useState } from "react";
import axios from "axios";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:4000/notes/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNotes(res.data.notes); // Adjust key if your API returns differently
      setLoading(false);
    } catch (error) {
      console.error("Error fetching notes:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <span className="text-4xl">📒</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Notes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your thoughts, ideas, and inspirations all in one place
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
            </div>
            <p className="text-center text-gray-600 mt-6 text-lg font-medium">
              Loading your notes...
            </p>
            <p className="text-center text-gray-400 mt-2">
              Gathering your thoughts ✨
            </p>
          </div>
        ) : notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center border border-blue-100 shadow-xl max-w-lg mx-auto">
              <div className="text-8xl mb-6 opacity-50">📝</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No notes yet!</h3>
              <p className="text-gray-500 text-lg mb-6">
                Your creative space is waiting. Start writing your first note!
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notes.map((note, index) => (
              <div
                key={note._id}
                className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 hover:border-blue-200 relative overflow-hidden ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-blue-50 to-white' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-purple-50 to-white' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-pink-50 to-white' :
                  'bg-gradient-to-br from-indigo-50 to-white'
                }`}
              >
                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 transform rotate-12 ${
                  index % 4 === 0 ? 'bg-blue-200' :
                  index % 4 === 1 ? 'bg-purple-200' :
                  index % 4 === 2 ? 'bg-pink-200' :
                  'bg-indigo-200'
                } rounded-full -translate-y-8 translate-x-8`}></div>
                
                {/* Note icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-xl ${
                    index % 4 === 0 ? 'bg-blue-100 text-blue-600' :
                    index % 4 === 1 ? 'bg-purple-100 text-purple-600' :
                    index % 4 === 2 ? 'bg-pink-100 text-pink-600' :
                    'bg-indigo-100 text-indigo-600'
                  }`}>
                    <span className="text-xl">✍️</span>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    index % 4 === 0 ? 'bg-blue-400' :
                    index % 4 === 1 ? 'bg-purple-400' :
                    index % 4 === 2 ? 'bg-pink-400' :
                    'bg-indigo-400'
                  } animate-pulse`}></div>
                </div>

                {/* Note content */}
                <h3 className="font-bold text-xl mb-3 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {note.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {note.content.slice(0, 100)}...
                </p>
                
                {/* Footer with date */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span className="text-xs">📅</span>
                    <span>
                      {new Date(note.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span className="text-xs">🕒</span>
                    <span>
                      {new Date(note.createdAt).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/5 group-hover:to-purple-400/5 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        )}

        {/* Notes count indicator */}
        {notes.length > 0 && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
              <span className="text-2xl">📊</span>
              <span className="text-gray-600 font-medium">
                {notes.length} {notes.length === 1 ? 'note' : 'notes'} in your collection
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
