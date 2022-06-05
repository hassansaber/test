// console.log(process.title);
// console.log(process.pid);
// console.log(process.arch);
// console.log(process.version);
// console.log(process.platform);
// console.log(process.env.NODE_ENV);
// console.log(process.env);
// process.on("beforeExit", (code) => {
//   console.log(code);
// });

// process.argv.forEach((val, ind) => {
//   console.log(ind, val);
// });

const fs = require("fs");

fs.writeFile("test.txt", "salaaaaaam", (err) => {
  if (err) throw err;
  console.log("done");
});

const os = require("os");

console.log(os.uptime());
