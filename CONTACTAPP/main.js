const chalk = require("chalk");
const yargs = require("yargs");
const {
  addContact,
  listContacts,
  removeContactByFullname,
} = require("./contacts");

// console.log(process.argv);
// console.log(yargs.argv);

yargs.scriptName(chalk.yellowBright("Contact Manager"));
yargs.usage(`$0 ${chalk.}`);

//add contacts
yargs.command({
  command: "create",
  aliases: ["c"],
  describe: `${chalk.yellow("[ create new contact ]")}`,
  builder: {
    fullname: {
      alias: "f",
      describe: "person fullname",
      demandOption: true,
      type: "string",
    },
    phone: {
      alias: "p",
      describe: `${chalk.yellow("person phone number")}`,
      demandOption: true,
      type: "number",
    },
    email: {
      alias: "e",
      describe: `${chalk.yellow("person Email")}`,
      demandOption: true,
      type: "string",
    },
  },
  handler({ fullname, phone, email }) {
    // console.log(fullname, phone, email);
    addContact(fullname, phone, email);
  },
});

// add list of contacts
yargs.command({
  command: "list",
  aliases: ["l"],
  describe: `${chalk.yellow("[Listing The Saved Contacts]")}`,
  handler() {
    listContacts();
  },
});

// remove contact
yargs.command({
  command: "remove",
  aliases: ["r"],
  describe: `${chalk.yellow("[Removing the Contact]")}`,
  builder: {
    fullname: {
      alias: "f",
      describe: "person fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler({ fullname }) {
    console.log(fullname);
    removeContactByFullname(fullname);
  },
});

//--
yargs.parse();
