const fs = require("fs");
const chalk = require("chalk");

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

module.exports = {
  addContact,
};
