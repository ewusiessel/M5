import express from "express";

import listEndpoints from "express-list-endpoints";

import filesRouter from "./services/files/router.js";

const { PORT } = process.env;

const server = express();

server.use("/files", filesRouter);

const endpoints = listEndpoints(server)

console.table(endpoints);

server.listen(PORT, () => console.log("✅ Server is 🚗 on port: ", PORT));

server.on("error", (err) =>
  console.log("🚨 Server is not running due to: ", error)
);
