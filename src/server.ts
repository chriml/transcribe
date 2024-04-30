import express, { Request, Response } from 'express';
import multer from 'multer';
import { transcribe } from './transctibe';
import ffmpeg from 'fluent-ffmpeg';
import { PassThrough, Readable } from 'stream';
import { existsSync, mkdirSync } from 'fs';


const app = express();
const port = "3000";

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

app.get('/',  async (req: Request, res: Response) => { res.send("fnao lyc")});


// Define a route for file upload
app.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
    // Retrieve the file from the request object
    const file = req.file;
    if (file) {
        const stream = Readable.from(file.buffer);
        let now = Date.now();
        const outputDir = "tmp/" +  now + "/";
    
        if (!existsSync(outputDir)) {
            mkdirSync(outputDir, {recursive: true});
        }
    
        ffmpeg({ source: stream })
            .outputOptions('-f', 'segment')
            .outputOptions('-segment_time', splitDuration.toString())
            .outputOptions('-c', 'copy')
            .outputOptions('-map', '0')
            .output(`${outputDir}output_%03d.mp3`)
    
            .on('end', async () => {
                console.log('Splitting complete');
    
                const transcript = await transcribe(outputDir);
                res.send(transcript);
    
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
