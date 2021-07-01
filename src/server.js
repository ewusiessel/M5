import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import authorsRouter from "./authors/index.js";

const server = express();
const PORT = 3001;

server.use(cors());

server.use(express.json());

server.use("/authors", authorsRouter);

console.table(listEndpoints(server));

server.listen(PORT, () => console.log("👍 Server is running on port :", PORT));

server.on("error", (error) =>
  console.log(`🚫 Server is not running due to : ${error}`)
);
