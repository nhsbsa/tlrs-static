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

router.get(/instalment-handler/, function (req, res) {
  if (req.query.plan == "2") {
    account.instalments = 6;
    payer.plan = 172;
  } else {
    account.instalments = 12;
    payer.plan = 86;
  }
  res.redirect('dates');
});

router.get('/payments/dd/contact-handler/', function (req, res) {
  payer.hasText = false;
  payer.hasEmail = false;
  if (req.query.text == 'true') {
    payer.hasText = true;
  }
  if (req.query.email == 'true') {
    payer.hasEmail = true;
  }
  if (payer.hasText) {
    res.redirect('text-value');
  } else if (payer.hasEmail) {
     res.redirect('mail-value');
  } else {
    payer.hasText = false;
    payer.hasEmail = false;
    res.redirect('accept');
  }
});