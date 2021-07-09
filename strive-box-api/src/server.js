import express from "express";

import listEndpoints from "express-list-endpoints";

import filesRouter from "./services/files/router.js";

import { errorHandler } from "./middlewares/error/handler.js";

import { publicPath } from "./utils/file-utils.js";

const { PORT } = process.env;

const server = express();

server.use(express.json());
v 
server.use("/downloads", express.static(publicPath));

server.use("/files", filesRouter);

server.use(errorHandler);

const endpoints = listEndpoints(server);

console.table(endpoints);

server.listen(PORT, () =>
  console.log("✅ Server is running 🚗 on port : ", PORT)
);

server.on("error", (err) =>
  console.log("🚨 Server is not ❌ running due to: ", error)
);
