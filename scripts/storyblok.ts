import { exec } from "node:child_process";
import { readFile, unlink, writeFile } from "node:fs/promises";
import { promisify } from "node:util";
import "dotenv/config";

const space = process.env.STORYBLOK_SPACE;
const execPromise = promisify(exec);

try {
	await execPromise(`storyblok pull-components --space ${space}`);
	await execPromise(`storyblok generate-typescript-typedefs --sourceFilePaths ./components.${space}.json --destinationFilePath ./types/global.d.ts`);
	const content = await readFile("types/global.d.ts", { encoding: "utf-8" });
	const updated = content.replace(/export/gi, "declare").replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, "");
	await writeFile("types/global.d.ts", updated, "utf-8");

	await unlink(`components.${space}.json`);
} catch (err) {
	console.log("Error:", err);
}
