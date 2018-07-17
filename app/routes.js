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
    plan = 172;
  } else {
    account.instalments = 12;
    plan = 86;
  }
  res.redirect('dates');
});

router.get('/payments/dd/contact-handler/', function (req, res) {
  hasText = false;
  hasEmail = false;
  if (req.query.text == 'true') {
    hasText = true;
  }
  if (req.query.email == 'true') {
    hasEmail = true;
  }
  if (hasText) {
    res.redirect('text-value');
  } else if (hasEmail) {
     res.redirect('mail-value');
  } else {
    hasText = false;
    hasEmail = false;
    res.redirect('accept');
  }
});

router.get('/payments/rp/contact-handler/', function (req, res) {
  hasText = false;
  hasEmail = false;
  if (req.query.text == 'true') {
    hasText = true;
  }
  if (req.query.email == 'true') {
    hasEmail = true;
  }
  if (hasText) {
    res.redirect('text-value');
  } else if (hasEmail) {
     res.redirect('mail-value');
  } else {
    hasText = false;
    hasEmail = false;
    res.redirect('accept');
  }
});

router.get('/payments/so/contact-handler/', function (req, res) {
  hasText = false;
  hasEmail = false;
  if (req.query.text == 'true') {
    hasText = true;
  }
  if (req.query.email == 'true') {
    hasEmail = true;
  }
  if (hasText) {
    res.redirect('text-value');
  } else if (hasEmail) {
     res.redirect('mail-value');
  } else {
    hasText = false;
    hasEmail = false;
    res.redirect('accept');
  }
});

router.get(/haha-handler/, function (req, res) {
  if (hasEmail) {
    res.redirect('mail-value');
  } else {
     res.redirect('accept');
  }
});

//router.get('/payments/dd/accept/', function (req, res) {
//  res.render('payments/dd/accept', {
//
//    text : text,
//
//    email : email
//  })
//})
