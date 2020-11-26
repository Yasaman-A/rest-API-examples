'use strict';

const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.set('Content-Type', 'application/json');
  next();
});

const createDB = async _ => {
  const database = require("./src/database");
  let db = await database.setup();
  return db
}

const startServer = async _ => {
  let db = await createDB();

  const routes = require('./src/routes');
  routes.register(app, db);

  const PORT = process.env.PORT || 8080;
  const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });
  process.on('unhandledRejection', err => {
    console.error(err);
    throw err;
  });

  return server;
}



//module.exports.app = app;
//startServer()
module.exports = { app, server: startServer(), db: createDB() };