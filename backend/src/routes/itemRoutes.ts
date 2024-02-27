import express from 'express';
import { getAllItems, getOneItem } from '../controllers/itemController';

const router = express.Router();

// Route to fetch all items
router.get('/', getAllItems);

// Route to fetch a single item by ID
router.get('/:id', getOneItem);

export default router;
