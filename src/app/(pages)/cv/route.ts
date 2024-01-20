import path from 'node:path';
import * as fs from 'fs';
import { NextResponse } from 'next/server';
import { ReadableOptions } from 'node:stream';

const streamFile = (path: string, options?: ReadableOptions): ReadableStream<Uint8Array> => {
	const downloadStream = fs.createReadStream(path, options);
	return new ReadableStream({
		start(controller) {
			downloadStream.on('data', (chunk: Buffer) => controller.enqueue(new Uint8Array(chunk)));
			downloadStream.on('end', () => controller.close());
			downloadStream.on('error', (error: NodeJS.ErrnoException) => controller.error(error));
		},
		cancel() {
			downloadStream.destroy();
		},
	});
};

export async function GET() {
	const filePath = path.join(process.cwd(), 'public', 'cv.pdf');
	const data: ReadableStream<Uint8Array> = streamFile(filePath);
	return new NextResponse(data, {
		status: 200,
		headers: {
			'Content-Type': 'application/text',
			'Content-Disposition': 'attachment; filename=cv.pdf'
		}
	});
}
