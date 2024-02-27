import { Request, Response } from "express";
import Data from "../models/models";

export const getAllItems = async (req: Request, res: Response) => {
 try {
    const items = await Data.find();
    return res.json(items);
 } catch (error) {
    console.error('Error fetching items:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
 }
}

export const getOneItem = async (req: Request, res: Response) => {
 try {
    const itemId = req.params.id;
    const item = await Data.findById(itemId);
    if (!item) {
        res.status(404).json({ message: 'Item not found' });
        return;
    }
    return res.json(item);
 } catch (error) {
    console.error('Error fetching item:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
 }
}

