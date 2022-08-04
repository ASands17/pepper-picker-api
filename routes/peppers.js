var express = require('express');
var router = express.Router();
// const picked= require('../data/picked.data')

router.get('/', function(req, res, next) {
    res.send(peppers);
  });

// router.get('/peppers/:id', function(req, res, next) {
//   res.send('peppers' + req.params.id);
// });
  
  module.exports = router;