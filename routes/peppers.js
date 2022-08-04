var express = require('express');
var router = express.Router();
// const picked= require('../data/picked.data')
const peppers= require('../data/peppers.data')

router.get('/', function(req, res, next) {
    res.send(peppers);
  });

router.get('/:id', function(req, res, next) {
  res.send('peppers' + req.params);
});
  
  module.exports = router;