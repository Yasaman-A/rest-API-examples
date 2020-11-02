// "use strict";

// require('dotenv').config()

// const Hapi = require("hapi");
// const routes = require("./routes");

// const app = async config => {
//    const { host, port } = config;

//    // create an instance of hapi
//    const server = Hapi.server({ host, port });

//    // store the config for later use
//    server.app.config = config;

//    // register routes
//    await routes.register(server);

//    await server.register({
//       plugin: require('hapi-plugin-mysql'),
//       options: {
//          host: "34.122.144.208", //process.env.DBHOST,
//          user: process.env.DB_USER,
//          database: process.env.DB_NAME,
//          password: process.env.DB_PASS
//       }
//    });

//    return server;
// };



// module.exports = app;
