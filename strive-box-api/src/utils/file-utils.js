import fs from "fs-extra";

import { v4 as uuidv4 } from "uuid";

import { fileURLToPath } from "url";

import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

export const getDataFilePath = (name) => join(__dirname, "../data", name);

export const readFile = async (name) => {
  const filesJSONPath = getDataFilePath(name);
  const json = await fs.readJSON(filesJSONPath);
  return json;
};

export const writeFile = async (name, content) => {
  const filesJSONPath = getDataFilePath(name);
  const json = await readFile(name);
  json.push({
    id: uuidv4(),
    ...content,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await fs.writeJSON(filesJSONPath, json);
  return json;
};
