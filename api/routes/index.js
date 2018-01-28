var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({test: "it works"});
});
let test = "123";

module.exports = router;
