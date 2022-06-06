const fs = require("fs");
const chalk = require("chalk");

const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();

  const duplicateContact = contacts.find((c) => c.fullname === fullname);

  if (!duplicateContact) {
    contacts.push({
      fullname,
      phone,
      email,
    });
    console.log(chalk.green("contact saved"));
  } else {
    console.log(chalk.red("contact already exist"));
  }
};

const loadContacts = () => {
  try {
    const dataBuffer = fs.readFileSync("contacts.json");
    const dataStr = dataBuffer.toString();
    const dataObj = JSON.parse(dataStr);
    return dataObj;
  } catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = {
  addContact,
};
