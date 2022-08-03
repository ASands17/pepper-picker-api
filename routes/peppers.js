var express = require('express');
var router = express.Router();
const picked= require('../data/picked.data')

router.get('/', function(req, res, next) {
    res.send(peppers);
  });
  
  module.exports = router;