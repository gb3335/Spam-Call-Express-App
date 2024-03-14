const { faker } = require('@faker-js/faker');
const db = require('../src/utils/database');
const User = require('../src/models/userModel');

async function populateDB() {
  for (let i = 0; i < 100; i++) {
    const name = faker.internet.userName();
    const email = faker.internet.email();
    const phoneNumber = faker.phone.number();
    const password = faker.internet.password();

    const user = new User({
      name,
      email,
      phoneNumber,
      password
    });

    try {
      await user.save();
      console.log(`User ${i + 1} created`);
    } catch (err) {
      console.error(err);
    }
  }

  db.close();
}

populateDB();