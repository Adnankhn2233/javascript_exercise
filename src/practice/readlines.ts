import { readFile } from "fs/promises";

async function readLines() {
  try {

    const text = await readFile("lines.txt", "utf-8");
    const lines = text.split(/\r?\n/);
    console.log(lines.length);
  }
  catch (err) {
    if(err instanceof Error)
    console.log("failed:", err.message);
  }

}

readLines();
