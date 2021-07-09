import { Router } from "express";
import createError from "http-errors";
import fs from "fs-extra";

import {
  readFile,
  writeFile,
  findById,
  findByIdAndDelete,
  findByIdAndUpdate,
  getDataFilePath,
} from "../../utils/file-utils.js";

import multer from "multer";

const router = Router();

const upload = multer();

//1. GET

router.get("/", async (req, res, next) => {
  try {
    const files = await readFile("files.json");
    res.send(files);
  } catch (error) {}
});

//2. CREATE

router.post("/", upload.single("cover"), async (req, res, next) => {
  try {
    // const files = await writeFile("files.json", req.body);
    const { originalname, buffer } = req.file;
    const filePath = getDataFilePath(originalname);
    await fs.writeFile(filePath, buffer);
    res.send("OK");
  } catch (err) {
    const error = createError(
      err.status || 500,
      err.message || "Can not delete file"
    );
    next(error);
  }
});

//3. GET SINGLE

router.get("/:id", async (req, res, next) => {
  try {
    const file = await findById(req.params.id, "files.json");
    res.send(file);
  } catch (err) {
    const error = createError(
      err.status || 500,
      err.message || "Can not delete file"
    );
    next(error);
  }
});

//4. UPDATE

router.put("/:id", async (req, res, next) => {
  try {
    const updated = await findByIdAndUpdate(
      req.params.id,
      "files.json",
      req.body
    );
    res.send(updated);
  } catch (err) {
    const error = createError(
      err.status || 500,
      err.message || "Can not delete file"
    );
    next(error);
  }
});

//5. DELETE SINGLE

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedObject = await findByIdAndDelete(req.params.id, "files.json");
    res.status(200).send(deletedObject);
  } catch (err) {
    const error = createError(
      err.status || 500,
      err.message || "Can not delete file"
    );
    next(error);
  }
});

export default router;
