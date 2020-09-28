require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/main');
const passwordRoutes = require('./routes/password');

const app = express();
const port = process.env.PORT || 3000;
console.log(process.env);
// update express setting
// parse application/x-www-form-urlendcoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application json data
app.use(bodyParser.json());

// setup routes
app.use('/', routes);
app.use('/', passwordRoutes);
// catch all other routes
app.use((request, response) => {
  response.status(404).json({ message: '404 - Not Found', status: 404 });
});

// handle errors
app.use((error, request, response, next) => {
  console.log(error);
  response.status(error.status || 500).json({ error: error.message, status: 500 });
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});