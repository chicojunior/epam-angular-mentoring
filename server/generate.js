const faker = require('faker');

const database = { courses: []};

for (let i = 1; i<= 12; i++) {
  database.courses.push({
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    creationDate: faker.date.recent(),
    duration: Math.floor(Math.random() * (250 - 15 + 1)) + 15,
    description: faker.lorem.paragraph(),
    topRated: faker.random.boolean()
  });
}

console.log(JSON.stringify(database));
