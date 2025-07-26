import 'dotenv/config'

import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Readable } from "stream";

// Get the directory name using ES module approach
const __filename = fileURLToPath(import.meta.url);
export default async (args) => {
  await Promise.all(
    args.map(async (file) => {
      try {
        const data = await fs.readFile(file, "utf-8");

        console.log(process.env.CELESTIAI_API_TOKEN)
        const response = await fetch('https://api.celestiai.co/api/v1/tts-turbo/tts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.CELESTIAI_API_TOKEN}`,
            },
            body: JSON.stringify({
                text: data,
                emotionVoice: "Authoritative_Male",
                language: "th",
                speed: 1,
                pitch: 1,
            })
        })

        if (!response.ok)
          throw new Error(`Failed to fetch url: ${response.status}`);
        const json = await response.json();
        if (!json.success)
          throw new Error(`Failed to fetch url: ${response.error}`);

        const { dir, name } = path.parse(file);
        const newFileName = `${name}.wav`;
        const newFilePath = path.join(dir, newFileName);

        const wavUrl = json.fileUrl;
        const wavResponse = await fetch(wavUrl);
        if (!wavResponse.ok)
          throw new Error(`Failed to download WAV file: ${wavResponse.status}`);
        const fileStream = fsSync.createWriteStream(newFilePath);
        const nodeStream = Readable.fromWeb(wavResponse.body);
        nodeStream.pipe(fileStream);
        await new Promise((resolve, reject) => {
            nodeStream.on("error", reject);
            fileStream.on("finish", resolve);
        });
      } catch (error) {
        console.error("Error:", error);
      }
    })
  );
};
