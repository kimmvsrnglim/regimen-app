var express = require('express');
var router = express.Router();



router.get('/', (req, res, next) => {
  res.json({test: "it works"});
});

router.post('/', (req, res, next) => {
  console.log(req.body);

  res.json(req.body);
})

module.exports = router;
