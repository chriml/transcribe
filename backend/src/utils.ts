import ffmpeg from 'fluent-ffmpeg';
import { Readable } from 'stream';

export async function getLengthOfFile(file: Buffer) {
    const stream = Readable.from(file);

    return await new Promise<number>((resolve, reject) => {
        try {
            ffmpeg({ source: stream }).ffprobe((err, metadata) => {
                let duration = Number(metadata?.format?.duration) || getLengthByBitrate(metadata.format.bit_rate, file.byteLength)
                if (duration) resolve(duration);
                else reject();
            });
        } catch (error) {
            reject(error)
        }
    })
}

export function getLengthByBitrate(bitrate: number | undefined, size: number): number | undefined {
    if (bitrate) {
        // length = (size * 8) / bitrate (Converted from https://stackoverflow.com/questions/29494827/calculate-mp3-duration-based-on-bitrate-and-file-size)
        return (size * 8) / bitrate;
    }
    return undefined;
}   