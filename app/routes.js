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