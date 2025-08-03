import express from 'express';
import { createNote, getNotes, updateNote } from "../controllers/noteController.js";
import { verifyToken } from '../middlewares/verifyToken.js';
import { deleteNote } from "../controllers/noteController.js";


const router = express.Router();

router.post('/create', verifyToken, createNote);
router.get("/all", verifyToken, getNotes);
router.delete("/:id", verifyToken, deleteNote);
router.put("/:id", verifyToken, updateNote);



export default router;
