import { AssemblyAI, FileUploadParams, Transcript } from 'assemblyai'
import { readdirSync } from 'fs'

// initialize the AssemblyAI Cleint
const client = new AssemblyAI({ apiKey: process.env.ASSEMBLY_AI_SECRET || "" });

// transcribe one file
export async function transcribeSingle(source: FileUploadParams): Promise<TranscriptResult> {
    const transcriptionResult = await client.transcripts.transcribe({
        audio: source,
        auto_highlights: true,
        language_detection: true
    });
    return parseResult(transcriptionResult);
}

// transcribe directory
export async function transcribeMultiple(dir: string): Promise<TranscriptResult[]> {
    let promises = readdirSync(dir).map(file => {
        return client.transcripts.transcribe({
            audio: file,
            auto_highlights: true,
            language_detection: true
        });
    });
    return (await Promise.all(promises)).map(parseResult);
}

// check status and adjust transcript result accordingly
function parseResult(result: Transcript): TranscriptResult {
    if (result.status === 'error') {
        return { text: "Could not parse transcript. Please try again...", keywords: [] };
    }
    return {
        text: result.text || '',
        keywords: result.auto_highlights_result?.results.sort((a, b) => a.rank - b.rank).map(r => r.text) || ([] as string[])
    }
}

type TranscriptResult = {
    text: string;
    keywords: string[];
}