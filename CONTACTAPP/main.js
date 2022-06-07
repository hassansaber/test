const yargs = require("yargs");
const { addContact } = require("./contacts");

// console.log(yargs.argv);

//add contacts
yargs.command({
  command: "create",
  aliases: ["c"],
  describe: "[ create new contact ]",
  builder: {
    fullname: {
      alias: "f",
      describe: "person fullname",
      demandOption: true,
      type: "string",
    },
    phone: {
      alias: "p",
      describe: "person phone number",
      demandOption: true,
      type: "number",
    },
    email: {
      alias: "e",
      describe: "person email",
      demandOption: true,
      type: "string",
    },
  },
  handler({ fullname, phone, email }) {
    // console.log(fullname, phone, email);
    addContact(fullname, phone, email);
  },
});

// console.log(process.argv);

yargs.parse();
