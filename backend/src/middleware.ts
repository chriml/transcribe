import { Request, Response, NextFunction } from "express";
import { getLengthOfFile } from "./utils";

const duration = Number(process.env.MINIMUM_FILE_DURATION_SEC) || 20;

export async function checkFile(req: Request, res: Response, next: NextFunction) {
    // Check if the file meets the condition  
    if (!req.file) {
        return res.status(400).json({ code: 40001, message: `File could not be checked. Please try again or select a new File.` });
    } else if (req.file && (await getLengthOfFile(req.file.buffer)) < duration) {
        // If the condition is not met, return a response with an error
        return res.status(400).json({ code: 40002, message: `File is shorter than ${duration} seconds. Please submit a file longer than ${duration} seconds.` });
    } else {
        console.log("File passed checks.");
        // If the condition is met, continue to the next middleware
        next();
    }
}