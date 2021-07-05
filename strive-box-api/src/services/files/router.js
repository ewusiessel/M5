import { Router } from "express";
import createError from "http-errors";
import { readFile, writeFile } from "../../utils/file-utils.js";

const router = Router();

//1. GET

router.get("/", async (req, res, next) => {
  try {
    const files = await readFile("files.json");
    res.send(files);
  } catch (error) {}
});

//2. CREATE

router.post("/", async (req, res, next) => {
  try {
    const files = await writeFile("files.json", req.body);
    res.send(files);
  } catch (error) {}
});

//3. GET SINGLE

router.get("/:id", (req, res, next) => {
  try {
    res.send("GET SINGLE FILE");
  } catch (error) {}
});

//4. UPDATE

router.put("/:id", (req, res, next) => {
  try {
    res.send("UPDATE SINGLE FILE");
  } catch (error) {}
});

//5. DELETE SINGLE

router.delete("/:id", (req, res, next) => {
  try {
  } catch (err) {
    const error = createError(
      err.status || 500,
      err.message || "Can not delete file"
    );
    next(error);
  }
});

export default router;
