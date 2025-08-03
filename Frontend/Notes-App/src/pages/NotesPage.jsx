import React, { useEffect, useState } from "react";
import {axiosInstance} from '../../axiosinstance'

const Notes = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddNote = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("Authorization");

    try {
      await axiosInstance.post(
        "/api/notes/create",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setContent("");
      fetchNotes(); // Update UI
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("Authorization");
      const res = await axiosInstance.get("/api/notes/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotes(res.data.notes);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching notes:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        {/* Add Note Form Section */}
        <div className="mb-12">
          <form onSubmit={handleAddNote} className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-xl mb-12 max-w-2xl mx-auto border border-white/10">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4 shadow-lg">
                <span className="text-3xl">✍️</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
                Add a New Note
              </h3>
            </div>

            <input
              type="text"
              placeholder="Enter your note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 mb-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              required
            />

            <textarea
              placeholder="Write your thoughts here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-4 mb-6 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm resize-none transition-all duration-300"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 px-6 py-4 rounded-xl text-white font-semibold transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="text-xl">➕</span>
                Add Note
                <span className="text-xl">🚀</span>
              </span>
            </button>
          </form>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mb-4 shadow-xl">
            <span className="text-4xl">📋</span>
          </div>
          <h2 className="text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent mb-4">
            My Notes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your thoughts, ideas, and inspirations all in one place
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-gray-600 rounded-full animate-spin"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
            </div>
            <p className="text-center text-gray-300 mt-6 text-lg font-medium">
              Loading notes...
            </p>
          </div>
        ) : notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 shadow-xl max-w-lg mx-auto">
              <div className="text-8xl mb-6 opacity-30">📝</div>
              <h3 className="text-2xl font-bold text-white mb-4">No notes found</h3>
              <p className="text-gray-400 text-lg mb-6">
                Your creative space is waiting. Start writing your first note!
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-3 h-3 bg-slate-400 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notes.map((note, index) => (
              <div
                key={note._id}
                className={`group bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 hover:border-blue-400/30 relative overflow-hidden ${
                  index % 4 === 0 ? 'hover:bg-blue-500/10' :
                  index % 4 === 1 ? 'hover:bg-indigo-500/10' :
                  index % 4 === 2 ? 'hover:bg-slate-500/10' :
                  'hover:bg-gray-500/10'
                }`}
              >
                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 transform rotate-12 ${
                  index % 4 === 0 ? 'bg-blue-400' :
                  index % 4 === 1 ? 'bg-indigo-400' :
                  index % 4 === 2 ? 'bg-slate-400' :
                  'bg-gray-400'
                } rounded-full -translate-y-8 translate-x-8`}></div>
                
                {/* Note icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-xl ${
                    index % 4 === 0 ? 'bg-blue-500/20 text-blue-400' :
                    index % 4 === 1 ? 'bg-indigo-500/20 text-indigo-400' :
                    index % 4 === 2 ? 'bg-slate-500/20 text-slate-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    <span className="text-xl">📝</span>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    index % 4 === 0 ? 'bg-blue-400' :
                    index % 4 === 1 ? 'bg-indigo-400' :
                    index % 4 === 2 ? 'bg-slate-400' :
                    'bg-gray-400'
                  } animate-pulse`}></div>
                </div>

                {/* Note content */}
                <h3 className="font-bold text-xl mb-3 text-white overflow-hidden h-14 group-hover:text-blue-300 transition-colors duration-300">
                  <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                    {note.title}
                  </span>
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed overflow-hidden h-20">
                  <span className="block overflow-hidden">
                    {note.content.slice(0, 100)}...
                  </span>
                </p>
                
                {/* Footer with date */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span className="text-xs">📅</span>
                    <span>
                      {new Date(note.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-blue-400">Click to view</span>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        )}

        {/* Notes count indicator */}
        {notes.length > 0 && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 shadow-xl border border-white/10">
              <span className="text-2xl">📊</span>
              <span className="text-gray-300 font-medium">
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
