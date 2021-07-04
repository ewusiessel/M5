import { Router } from "express";
import createError from "http-errors";
import "../../utils/file-utils.js";

const router = Router();

//1. GET

router.get("/", (req, res, next) => {
  try {
    let meta = import.meta.url;
    res.send(meta);
  } catch (error) {}
});

//2. CREATE

router.post("/", (req, res, next) => {
  try {
    res.send("CREATE A FILE");
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
