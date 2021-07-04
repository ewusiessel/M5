import fs from "fs-extra";

import { fileURLToPath } from "url";

import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

export const getDataFilePath = (name) => join(__dirname, "../data", name);

export const readFile = async (name) => {
  const filesJSONPath = getDataFilePath("name");
  const json = await fs.readJSON();
  return json;
};
