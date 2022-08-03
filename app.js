var express = require('express');
var path = require('path');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
var peppersRouter = require('./routes/peppers');
var pickedRouter = require('./routes/picked');

express()
.use(cors())
  .use('/peppers', peppersRouter)
  .use('/picked', pickedRouter)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

