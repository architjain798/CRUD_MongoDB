const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);
  console.log(req.headers.code);
  //if (req.url === "/") {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("demo.html").pipe(res);
  // }
});
let currentPort = 8080;

server.listen(currentPort);

//server.close();
