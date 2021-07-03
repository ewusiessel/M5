import express from "express";

const { PORT } = process.env


const server = express();



server.listen(PORT, () => console.log('✅ Server is 🚗 on port: ', PORT))

server.on("error", (err) => console.log('🚨 Server is not running due to: ', error)) 