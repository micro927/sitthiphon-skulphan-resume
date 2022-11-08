import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = JSON.parse(await fs.readFile(jsonDirectory + '/information.json') ?? {})
    res.status(200).json(fileContents);
}