var express = require('express');
var router = express.Router();
const peppers= require('../data/peppers.data')

router.get('/', function(req, res, next) {
    res.send(peppers);
  });
  
  module.exports = router;