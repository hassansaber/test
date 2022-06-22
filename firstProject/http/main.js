const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //req
  const { url, method, headers } = req;
  console.log(`url:${url} \n method:${method} \n headers:${headers}`);

  //res
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello World</title></head>");
  res.write("<body><h1>Hello Worldddddddddddddddddd</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
