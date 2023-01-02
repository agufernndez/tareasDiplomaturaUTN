var express = require('express');
var router = express.Router();

/* GET contactanos page. */
router.get('/contactanos', function(req, res, next) {
  res.render('contactanos'); /*contactanos.hbs*/
});

module.exports = router;
