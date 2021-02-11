//Libraries
const express = require("express");
const app = express();
const argv = require("minimist")(process.argv.slice(2));
const bodyParser = require("body-parser");
const cors = require("cors");

//Services
const dbConnection = require("./src/services/dbConnection");

//Middlewares
const authenticate = require("./src/middlewares/authenticate");
const sanitizer = require("./src/middlewares/sanitizer")

//Routes
const routes_v1 = require("./src/routes/v1/routes");

global.export = con = dbConnection.createConnection(); //Export global connection variable for mysql

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("*", sanitizer.validator) //sanitize and validate input request
app.use("/api/v1", routes_v1); // Routes for controller
app.get("*", authenticate.routeNotFound);

// Configure the API domain
var domain = "localhost";
if (argv.domain !== undefined) domain = argv.domain;
else console.log('No --domain=xxx specified, taking default hostname "localhost".');

// Configure the API port
var port = 4400;

// port = 4400
if (argv.port !== undefined) port = argv.port;
else console.log("No --port=xxx specified, taking default port " + port + ".");

// Set and display the application URL
var applicationUrl = "http://" + domain + ":" + port;
console.log("snapJob API running on " + applicationUrl);

module.exports = app

// Start the web server
app.listen(port);
console.log("App Running on port " + port);
