const faker = require('faker');
const bcrypt = require('bcrypt');

const generateUsers = ({ salt }) => ({
  id: faker.random.uuid(),
  email: faker.internet.email(),
  password: bcrypt.hashSync(faker.random.alphaNumeric(), salt),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
});

const generate = ({ users, salt }) => ([
  {
    ...generateUsers({ salt }),
    email: 'admin',
    password: bcrypt.hashSync('admin', salt)
  },
  ...(users > 1 ? new Array(users).fill(null).map(() => generateUsers({ salt })) : [])
]);

module.exports = generate;
