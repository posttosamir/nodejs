// server.mjs
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World!\n");
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, "127.0.0.1", () => {
//   console.log("Listening on 127.0.0.1:3000");
// });

import { v4 as uuidv4 } from "uuid";
uuidv4();

console.log(uuidv4());
