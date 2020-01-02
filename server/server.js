const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');

const dataGenerator = require('./generators/db.generator');
const config = require('./configs/server.config');

const data = dataGenerator({
  secret: config.secret,
  courses: 10
});

const getUser = (params) => {
  const paramsKeys = Object.keys(params);
  return data.users.find(
    u => paramsKeys.every(
      param => u[param] === params[param]
    )
  );
};

const authGuard = (req, res, next) => {
  const authorization = req.header('Authorization');
  const token = authorization ? authorization.split(' ')[1] : null;
  if (!token) {
    res.status(400).send({
      status: false,
      response: 'Missing auth token'
    });
  } else {
    try {
      const userData = jwt.verify(token, config.tokenKey);
      const user = getUser({
        id: userData.id
      });
      if (user) {
        next();
      } else {
        res.status(401).send({
          status: false,
          response: 'Invalid token'
        });
      }
    } catch {
      res.status(401).send({
        status: false,
        response: 'Invalid token'
      });
    }
  }
};

const loginRouter = express.Router();
loginRouter.post('/', (req, res, next) => {
  try {
    const body = req.body;
    const user = getUser({
      email: body.email
    });

    if (!user || !bcrypt.compareSync(body.password, user.password)) {
      res.status(401).send({
        status: false,
        response: 'Invalid email or password',
      });
    } else {
      res.json(jwt.sign(user, config.tokenKey, {
        expiresIn: 60 * 60
      }));
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      response: error.message
    });
  }
});

const usersRoute = express.Router();
usersRoute.use(authGuard);
usersRoute.get('/', (req, res, next) => {
  res.json(data.users);
});
usersRoute.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const user = getUser({ id });

  if (user) {
    res.json(user);
  } else {
    res.status(404).send({
      status: false,
      response: 'User doesn\'t exists'
    });
  }
});

const coursesRouter = jsonServer.router({ courses: data.courses });
coursesRouter.use(authGuard);

const middlewares = jsonServer.defaults();

const server = jsonServer.create();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/login', loginRouter);
server.use('/users', usersRoute);
server.use(coursesRouter);

server.listen(3000, () => {
  console.info('JSON server started at 3000 port');
});
