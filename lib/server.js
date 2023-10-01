'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const err404 = require('./error-handlers/404.js');
const err500 = require('./error-handlers/500.js');

app.use(cors());

app.use(logger);
// app.use(validator);
app.get('/person', validator, (req, res) => {
  const name = req.query.name;
  res.json({ name: name });
});
app.use(err500);
app.use(err404);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server is running on PORT ::', PORT);
    });
  },
};
