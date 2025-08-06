import Note from "../models/Note.js";

export const createNote = async (req, res) => {
  console.log("Create note request received");
  console.log("Request body:", req.body);
  console.log("User ID from token:", req.user?.id);
  
  const { title, content } = req.body;
  const userId = req.user?.id; 

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  if (!userId) {
    return res.status(401).json({ error: "User ID not found in request" });
  }

  try {
    const newNote = await Note.create({ title, content, userId });
    console.log("Note created successfully:", newNote);
    console.log("Created at:", newNote.createdAt);
    console.log("Created at type:", typeof newNote.createdAt);
    res.status(201).json(newNote);
  } catch (err) {
    console.error("Error creating note:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getNotes = async (req, res) => {
  const userId = req.user.id; 
  try {
    const notes = await Note.find({ userId }); 
    console.log("Notes fetched:", notes.length);
    if (notes.length > 0) {
      console.log("First note createdAt:", notes[0].createdAt);
      console.log("First note createdAt type:", typeof notes[0].createdAt);
    }
    res.status(200).json({ notes });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

export const deleteNote = async (req, res) => {
  console.log("Delete note request received");
  console.log("Note ID:", req.params.id);
  console.log("User ID:", req.user?.id);
  
  const noteId = req.params.id; 
  const userId = req.user?.id;   

  try {
    const note = await Note.findById(noteId); 
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.userId.toString() !== userId) {
      return res.status(403).json({ message: "Not authorized to delete this note" });
    }

    await Note.findByIdAndDelete(noteId); 
    console.log("Note deleted successfully");
    res.status(200).json({ message: "Note deleted successfully" });

  } catch (err) {
    console.error("Error deleting note:", err);
    res.status(500).json({ message: "Error deleting note" });
  }
};

// UPDATE NOTE CONTROLLER
export const updateNote = async (req, res) => {
  console.log("Update note request received");
  console.log("Note ID:", req.params.id);
  console.log("User ID:", req.user?.id);
  console.log("Request body:", req.body);
  
  try {
    const noteId = req.params.id;
    const userId = req.user?.id; // Logged in user ID from token
    const { title, content } = req.body;

    const note = await Note.findOne({ _id: noteId, userId: userId });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Update fields if provided
    if (title) note.title = title;
    if (content) note.content = content;

    const updatedNote = await note.save();
    console.log("Note updated successfully:", updatedNote);

    res.status(200).json({
      message: "Note updated successfully",
      updatedNote,
    });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

