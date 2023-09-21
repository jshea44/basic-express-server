'use strict';

const logger = (req, res, next) => {
  console.log('REQUEST METHOD: ' + req.method);
  console.log('REQUEST PATH: ' + req.path);
  next();
};

module.exports = logger;
