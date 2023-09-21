'use strict';

const validator = (req, res, next) => {
  let name = req.query.name;
  let path = req.path;
  if (!name) {
    next({ code: 500, message: 'NO VALUE GIVEN' }); // any error that you want to throw is passed as an argument into the next function.
  } else if (path !== '/person') {
    next({ code: 404, message: 'Bad Route' });
  } else {
    next();
  }
};

module.exports = validator;
