'use strict';

const serverError404 = (err, req, res, next) => {
  res.status(404).json({ message: err.message });
};

module.exports = serverError404;
