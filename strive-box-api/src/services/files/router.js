import { Router } from "express";

const router = Router();

//1. GET

router.get("/", (req, res, next) => {
  try {
    res.send("GET ALL FILES");
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
    res.send("DELETE SINGLE FILE");
  } catch (error) {}
});

export default router;
