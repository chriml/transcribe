// npm install assemblyai

import { AssemblyAI } from 'assemblyai'
import { readdirSync } from 'fs'
import { Writable } from 'stream'
import 'dotenv/config';

const client = new AssemblyAI({ apiKey: process.env.ASSEMBLY_AI_SECRET || "" })

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