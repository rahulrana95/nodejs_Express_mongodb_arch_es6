const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import setRoutes from "./routes";
app.use(bodyParser.json());
setRoutes(app);

require('dotenv/config');

// Middlewares call function on every route

// it will parse body in json format for all routes


module.exports = app;