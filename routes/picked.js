var express = require('express');
var router = express.Router();
const peppers= require('../data/peppers.data')

router.get('/:id', function(req, res, next) {
    res.send('peppers' + req.params.id);
  });
  
  module.exports = router;
