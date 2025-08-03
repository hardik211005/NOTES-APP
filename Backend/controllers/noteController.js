import Note from "../models/Note.js";

export const createNote = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id; 

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const newNote = Note.create({ title, content, userId });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getNotes = async (req, res) => {
  const userId = req.user.id; 
  try {
    const notes = await Note.find({ userId }); 
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

export const deleteNote = async (req, res) => {
  const noteId = req.params.id; 
  const userId = req.user.id;   

  try {
    const note = await Note.findById(noteId); 
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.userId.toString() !== userId) {
      return res.status(403).json({ message: "Not authorized to delete this note" });
    }

    await note.deleteOne(); 
    res.status(200).json({ message: "Note deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Error deleting note" });
  }
};

// UPDATE NOTE CONTROLLER
export const updateNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const userId = req.user._id; // Logged in user ID from token
    const { title, content } = req.body;

    const note = await Note.findOne({ _id: noteId, user: userId });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Update fields if provided
    if (title) note.title = title;
    if (content) note.content = content;

    const updatedNote = await note.save();

    res.status(200).json({
      message: "Note updated successfully",
      updatedNote,
    });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

