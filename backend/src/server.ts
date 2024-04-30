import express, { Request, Response } from 'express';
import multer from 'multer';
import { transcribe, transcribeBuffer } from './transctibe';
import ffmpeg from 'fluent-ffmpeg';
import { PassThrough, Readable } from 'stream';
import { existsSync, mkdirSync } from 'fs';
import { performance } from 'perf_hooks';
import cors from 'cors';

const app = express();
const port = "3000";

app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });
/* 
// Set up Multer for handling multipart/form-data
const storage = multer.diskStorage({
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
const splitDuration: number = 10; // Split every 10 seconds

app.get('/', async (req: Request, res: Response) => { console.log("Get request"); res.send("Get your files transcrbed!"); });

// Define a route for file upload
app.post('/uploadSlow', upload.single('file'), async (req: Request, res: Response) => {
    console.log("upload slow received");

    // Retrieve the file from the request object
    const file = req.file;
    if (file) {
        const time = performance.now()
        const transcript = await transcribeBuffer(file.buffer);
        const endtime = performance.now()
        return res.send({ time: endtime - time, transcript });
    } else {
        return res.status(400).send('No file uploaded.');
    }
});

// Define a route for file upload
app.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
    console.log("upload received");

    // Retrieve the file from the request object
    const file = req.file;
    if (file) {
        const stream = Readable.from(file.buffer);
        let now = Date.now();
        const outputDir = "tmp/" + now + "/";

        if (!existsSync(outputDir)) {
            mkdirSync(outputDir, { recursive: true });
        }

        ffmpeg({ source: stream })
            .outputOptions('-f', 'segment')
            .outputOptions('-segment_time', splitDuration.toString())
            .outputOptions('-c', 'copy')
            .outputOptions('-map', '0')
            .output(`${outputDir}output_%03d.mp3`)

            .on('end', async () => {
                console.log('Splitting complete');
                const time = performance.now()

                const transcript = await transcribe(outputDir);
                const endtime = performance.now()

                

                res.send({ time: endtime - time, transcript: transcript.join(' ') });

            })
            .on('error', (err) => {
                console.error('Error during splitting:', err);
            })
            .run();
    }


    if (!file) {
        // If no file stream is received, return an error response
        return res.status(400).send('No file uploaded.');
    }


    // If file is received, return a success response
});
/* 
// Serve static files from the 'uploads' directory
app.use(express.static(path.join(__dirname, 'uploads'))); */

export function start() {
    // Start the server
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
};

start();
