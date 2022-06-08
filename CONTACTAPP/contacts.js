const fs = require("fs");
const chalk = require("chalk");

//contacts loader
const loadContacts = () => {
  try {
    const dataBuffer = fs.readFileSync("contacts.json");
    const dataStr = dataBuffer.toString();
    const dataObj = JSON.parse(dataStr);
    return dataObj;
  } catch (err) {
    // console.log(err);
    return [];
  }
};

//COMMANDS functions--

// ----------------------------------------------
//Adding contact
const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();

  if (checkDuplicatedContact(contacts, fullname, phone, email)) {
    contacts.push({
      fullname,
      phone,
      email,
    });
    saveContacts(contacts);
    console.log(chalk.green("contact saved"));
  }
};

const checkDuplicatedContact = (contacts, fullname, phone, email) => {
  const duplicateContactN = contacts.find((c) => c.fullname === fullname);
  const duplicateContactP = contacts.find((c) => c.phone === phone);
  const duplicateContactE = contacts.find((c) => c.email === email);

  if (duplicateContactN) {
    console.log(chalk.red("contact with this full name already exist"));
  }
  if (duplicateContactP) {
    console.log(chalk.red("contact with this phone number already exist"));
  }
  if (duplicateContactE) {
    console.log(chalk.red("contact with this Email address already exist"));
  } else {
    return true;
  }
  return false;
};

const saveContacts = (contacts) => {
  const data = JSON.stringify(contacts);
  fs.writeFileSync("contacts.json", data);
};

// ----------------------------------------------
//Listing contacts
const listContacts = () => {
  const contacts = loadContacts();

  if (contacts.length > 0) {
    console.log(chalk.yellowBright("Your contacts:\n"));
    contacts.forEach((c) => {
      console.log(`\t${chalk.green("Full Name")}: ${c.fullname}`);
      console.log(`\t${chalk.green("Phone")}: ${c.phone}`);
      console.log(`\t${chalk.green("Email")}: ${c.email}`);
      console.log(chalk.blue("\t-----------------------"));
    });
  } else {
    console.log(chalk.red("You don't have any contact"));
  }
  // TABLE View
  // console.table(contacts);
};

// ----------------------------------------------
//Remove contact
const removeContactByFullname = (fullname) => {
  const contacts = loadContacts();

  const filterdContacts = contacts.filter((c) => c.fullname !== fullname);
  if (contacts.length > filterdContacts.length) {
    saveContacts(filterdContacts);
    console.log(chalk.green(`${fullname} has been removed`));
  } else {
    console.log(chalk.red(`contact not found`));
  }
};

//  --
module.exports = {
  addContact,
  listContacts,
  removeContactByFullname,
};
