import express from 'express';
import { createNote, getNotes, updateNote } from "../controllers/noteController.js";
import { verifyToken } from '../middlewares/verifyToken.js';
import { protect } from "../middlewares/authMiddleware.js";
import { deleteNote } from "../controllers/noteController.js";


const router = express.Router();

router.post('/create', verifyToken, createNote);
router.get("/all", protect, getNotes);
router.delete("/:id", protect, deleteNote);
router.put("/:id", protect, updateNote);



export default router;
