var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  let quantity = 0;

  return res.render('index', { quantity });
});

router.post('/', (req, res) => {
  const { quantity, option } = req.body

  return res.render('index', { quantity, option });
});


module.exports = router;
