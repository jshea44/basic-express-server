'use strict';

const logger = () => {
  console.log('REQUEST METHOD: ' + req.method);
  console.log('REQUEST PATH: ' + req.path);
  next();
};

module.exports = logger;
