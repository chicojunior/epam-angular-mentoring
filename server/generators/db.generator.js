const coursesGenerator = require('./courses.generator');
const userGenerator = require('./users.generator');

const generate = ({ courses, secret }) => ({
  courses: coursesGenerator(courses),
  users: userGenerator({ salt: secret })
});

module.exports = generate;
