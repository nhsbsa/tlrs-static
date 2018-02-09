var express = require('express');
var router = express.Router();
var attempt = 0;
module.exports = router;

router.get('/challenge/verify/attempt-handler/', function (req, res) {
    
    var result = attempt++;
    
    console.log(result);
    
  if (result == 2) {
    res.redirect('fail');
  }
 else {
    res.redirect('nextGo');
  }
});

router.get('/', function (req, res) {
  attempt = 0;
  res.render('index');
});

router.get(/index/, function (req, res) {
  attempt = 0;
  res.render('index');
});