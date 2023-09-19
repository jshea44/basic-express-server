'use strict';

const serverError500 = (err, req, res, next) => {
  res.status(500).json({ message: 'Server Error' });
};

module.exports = serverError500;
