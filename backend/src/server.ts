import 'dotenv/config';

import express, { Request, Response } from 'express';
import multer from 'multer';
import { transcribeMultiple, transcribeSingle } from './transctibe';
import ffmpeg from 'fluent-ffmpeg';
import { Readable } from 'stream';
import { existsSync, mkdirSync, rmSync } from 'fs';
import { performance } from 'perf_hooks';
import cors from 'cors';
import { checkFile } from './middleware';

const app = express();
const port = process.env.PORT || "3000";

// allow cross origins
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

// Set up Multer for handling multipart/form-data
/* const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Define the destination folder where uploaded files will be stored
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      // Define the filename for the uploaded file
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  }); */

// const upload = multer({ storage: storage });
const splitDuration: number = 60; // Split every 10 seconds

app.get('/', async (req: Request, res: Response) => { console.log("Get request"); res.send("Get your files transcrbed!"); });

// Define a route for file upload
app.post('/uploadFull', upload.single('file'), checkFile, async (req: Request, res: Response) => {
    // Retrieve the file from the request object
    const file = req.file;
    if (file) {
        // transcribe file
        const time = performance.now()
        const transcript = await transcribeSingle(file.buffer);
        const endtime = performance.now()
        return res.send({ time: endtime - time, ...transcript });
    } else {
        return res.status(400).send('No file uploaded.');
    }
});

// Define a route for file upload
app.post('/uploadParts', upload.single('file'), checkFile, async (req: Request, res: Response) => {
    // Retrieve the file from the request object
    const file = req.file;
    if (file) {
        const stream = Readable.from(file.buffer);
        let now = Date.now();
        const outputDir = "tmp/" + now + "/";

        // mk temp dir if not exists
        if (!existsSync(outputDir)) {
            mkdirSync(outputDir, { recursive: true });
        }

        // spit file in segments of <splitDuration> seconds
        ffmpeg({ source: stream })
            .outputOptions('-f', 'segment')
            .outputOptions('-segment_time', splitDuration.toString())
            .outputOptions('-c', 'copy')
            .outputOptions('-map', '0')
            .output(`${outputDir + file.filename}`)
            .on('end', async () => {
                // transcribe segments
                const time = performance.now()
                const transcript = await transcribeMultiple(outputDir);
                const endtime = performance.now()

                // remove tmp directory
                rmSync(outputDir, { recursive: true, force: true });

                res.send({ time: endtime - time, transcript: transcript.map(t => t.text).join(' '), keywords: transcript.map(t => t.keywords) });
            })
            .on('error', (err) => {
                console.error('Error during splitting:', err);
                return res.status(400).json({ code: 40003, message: "Could not check the file, please try again or upload a different file." });
            })
            .run();
    } else {
        // If no file stream is received, return an error response
        return res.status(400).send('No file uploaded.');
    }
});

export function start() {
    // Start the server
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
};

start();
