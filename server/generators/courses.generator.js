const faker = require('faker');

const generate = (amount = 10) => new Array(amount).fill(null).map(
  () => ({
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    creationDate: faker.date.recent(),
    duration: Math.floor(Math.random() * (250 - 15 + 1)) + 15,
    description: faker.lorem.paragraph(),
    topRated: faker.random.boolean()
  })
);

module.exports = generate;
