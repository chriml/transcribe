import { AssemblyAI, FileUploadParams, Transcript } from 'assemblyai'
import { readdirSync } from 'fs'

// initialize the AssemblyAI Cleint
const client = new AssemblyAI({ apiKey: process.env.ASSEMBLY_AI_SECRET || "" });

// transcribe one file
export async function transcribeSingle(source: FileUploadParams): Promise<any> {
    const transcriptionResult = await client.transcripts.transcribe({ audio: source });
    return parseResult(transcriptionResult);
}

// transcribe directory
export async function transcribeMultiple(dir: string): Promise<any> {
    let promises = readdirSync(dir).map(file => {
        return client.transcripts.transcribe({ audio: file });;
    });
    return (await Promise.all(promises)).map(parseResult);
}

// check status and adjust transcript result accordingly
function parseResult(result: Transcript) {
    if (result.status === 'error') {
        return "Could not parse transcript. Please try again...";
    }
    return result.text
}