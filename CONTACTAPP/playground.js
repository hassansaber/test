const fs = require("fs");

const persons = [
  { id: 1, fullname: "Hassan Saber" },
  { id: 2, fullname: "Beni Nayudi" },
  { id: 3, fullname: "Arad inoo" },
];

// fs.writeFileSync("contacts.json", JSON.stringify(persons));

// const data = fs.readFile("contacts.json", (err) => {
//   if (err) throw err;
// });
const data = fs.readFileSync("contacts.json");

// console.log(JSON.parse(data));
// console.log(data.toString());
const p = JSON.parse(data);
console.log(p);

//---------------------------------------------------------------------

// console.log(process.argv[2]);

const command = process.argv[2];

// if (command === "add") console.log("Adding...");
// else console.log("command not valid");

switch (command) {
  case "add":
    console.log("Adding...");
    break;
  case "remove":
    console.log("removing");
    break;

  default:
    console.log("command not valid");
    break;
}
