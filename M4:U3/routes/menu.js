var express = require('express');
var router = express.Router();

/* GET menu page. */
router.get('/', function(req, res, next) {
  res.render('menu'); /*menu.hbs*/
});

module.exports = router;
