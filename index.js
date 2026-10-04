import fs from "fs/promises";

const filename = process.argv[2];

if (!filename) {
    console.log("Please provide a filename.");
    process.exit(1);
}

try {
    const text = await fs.readFile(filename, "utf8");

    const lines = text.split("\n").length;
    const words = text.trim().split(/\s+/).length;
    const characters = text.length;

    console.log(`File: ${filename}`);
    console.log(`Lines: ${lines}`);
    console.log(`Words: ${words}`);
    console.log(`Characters: ${characters}`);
} catch (error) {
    console.log(`Error: Could not read file "${filename}".`);
}