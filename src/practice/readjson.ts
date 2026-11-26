import { readFile } from "fs/promises";

async function readjson() {
  try {

    const text = await readFile("data.json", "utf-8");
    const data = JSON.parse(text);
    console.log(data.name);
  }
  catch (err) {
    if(err instanceof Error){
    console.log("failed:", err.message);}
  }

}

readjson();