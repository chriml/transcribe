// npm install assemblyai

import { AssemblyAI } from 'assemblyai'
import { readdirSync } from 'fs'
import { Writable } from 'stream'

const client = new AssemblyAI({ apiKey: "63a9fa86b01547b4ad9f01a12d2c2aac" })

const audioUrl = 'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'

export async function transcribeBuffer(buffer: Buffer): Promise<any> {
    /* if (transcript.status === 'error') {
        console.log(transcript.error)
    } */
    return (await client.transcripts.transcribe({ audio: buffer })).text;
}

export async function transcribe(dir: string): Promise<any> {
    console.log(dir);

    let promises = readdirSync(dir).map(file => {
        return client.transcripts.transcribe({ audio: dir + file });
    });

    /* if (transcript.status === 'error') {
        console.log(transcript.error)
    } */
    return (await Promise.all(promises)).map(res => res.text);
}

export async function transcribeFile(file: any): Promise<any> {



    /* if (transcript.status === 'error') {
        console.log(transcript.error)
    } */
    return (await client.transcripts.transcribe({ audio: file })).text
}