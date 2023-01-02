var express = require('express');
var router = express.Router();

/* GET galeria page. */
router.get('/galeria', function(req, res, next) {
  res.send('galeria'); /*galeria.hbs*/
});

module.exports = router;
