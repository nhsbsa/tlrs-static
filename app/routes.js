var express = require('express');
var router = express.Router();
var attempt = 0;

module.exports = router;

//import the content
var Content = require('./content.js');
var content = Content.content;

var hasBen;
var dd;

var resetAll = function () {

    content.updateContent("D");
    content.hasBen = 'no';
    console.log(hasBen);
    
};



// Route index page
router.get('/', function (req, res) {
    var hasBen;
  resetAll();
  res.render('index');
    console.log(hasBen);
});

router.get(/index/, function (req, res) {
  var hasBen;
    resetAll();
  res.render('index');
    console.log(hasBen);
});

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
  hasLetter = false;
  if (req.query.text == 'true') {
    hasText = true;
  }
  if (req.query.email == 'true') {
    hasEmail = true;
  }
  if (req.query.letter == 'true') {
    hasLetter = true;
  }
  if (hasText) {
    res.redirect('text-value');
  } else if (hasEmail) {
     res.redirect('mail-value');
  } else if (hasLetter) {
     res.redirect('valueAddress');
  } else {
    hasText = false;
    hasEmail = false;
    hasLetter = false;
    res.redirect('yourplan');
  }
});


router.get('/contentImprov/challengeOptions/contact-handler/', function (req, res) {
  hasText = false;
  hasEmail = false;
  hasLetter = false;
  if (req.query.text == 'true') {
    hasText = true;
  }
  if (req.query.email == 'true') {
    hasEmail = true;
  }
  if (req.query.letter == 'true') {
    hasLetter = true;
  }
  if (hasText) {
    res.redirect('infoPage');
  } else if (hasEmail) {
     res.redirect('infoPage');
  } else if (hasLetter) {
     res.redirect('infoPageChallenge');
  } else {
    hasText = false;
    hasEmail = false;
    hasLetter = false;
    res.redirect('infoPageChallenge');
  }
});


// ADDRESS HANDLER FOR DIRECT DEBITS //////////////////////////////////////////////////////////////

router.get('/breakdown/dd/update-address-handler/', function (req, res) {
  if (req.query.exemption == 'yes') {
    res.redirect('summary12mth');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('manualAddress');
  }
  else {
    res.redirect('summary12mth');
  }
});

router.get('/payments/dd_v2/update-address-handler/', function (req, res) {
  if (req.query.exemption == 'yes') {
    res.redirect('summary');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('manualAddress');
  }
  else {
    res.redirect('summary');
  }
});

router.get('/payments/dd_decs/update-address-handler/', function (req, res) {
  if (req.query.exemption == 'yes') {
    res.redirect('summary');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('manualAddress');
  }
  else {
    res.redirect('summary');
  }
});

router.get('/payments/dd_v2_test/update-address-handler/', function (req, res) {
  if (req.query.exemption == 'yes') {
    res.redirect('summary');
  }
  else if (req.query.exemption == 'no') {
    res.redirect('manualAddress');
  }
  else {
    res.redirect('summary');
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
     res.redirect('yourplan');
  }
});

router.get(/pregnancy-handler/, function (req, res) {
  
  if (req.query.pregnant == 'yes'){ 
    content.pregnant = 'yes';
      res.redirect('mat-ben');
  } else {
      content.pregnant = 'no';
    res.redirect('cant-find-cert-decs');
  }
});

router.get(/mat-ben/, function (req, res) {
  res.render('hc3/lower2/mat-ben', {
    title : content.title,
      pregnant : content.pregnant,
      hasBen : content.hasBen,
      bens: req.query.benefits
  });
});

router.get(/endHc3/, function (req, res) {
  res.render('hc3/lower2/endHc3', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/dwpDecisionDecs/, function (req, res) {
  res.render('hc3/lower2/dwpDecisionDecs', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/mat-ben/, function (req, res) {
  res.render('hc3/higher/mat-ben', {
    title : content.title,
      pregnant : content.pregnant,
      hasBen : content.hasBen,
      bens: req.query.benefits
  });
});

router.get(/endHc3/, function (req, res) {
  res.render('hc3/higher/endHc3', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/dwpDecisionDecs/, function (req, res) {
  res.render('hc3/higher/dwpDecisionDecs', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/mat-ben/, function (req, res) {
  res.render('hc3/noPayment/mat-ben', {
    title : content.title,
      pregnant : content.pregnant,
      hasBen : content.hasBen,
      bens: req.query.benefits
  });
});

router.get(/endHc3/, function (req, res) {
  res.render('hc3/noPayment/endHc3', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/dwpDecisionDecs/, function (req, res) {
  res.render('hc3/noPayment/dwpDecisionDecs', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/mat-ben/, function (req, res) {
  res.render('hc3/same/mat-ben', {
    title : content.title,
      pregnant : content.pregnant,
      hasBen : content.hasBen,
      bens: req.query.benefits
  });
});

router.get(/endHc3/, function (req, res) {
  res.render('hc3/same/endHc3', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/dwpDecisionDecs/, function (req, res) {
  res.render('hc3/same/dwpDecisionDecs', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/dwp-exemptions-handler/, function (req, res) {
  var bens = req.query.benefits;
  var topCat;
    var hasBen;

    if (bens == "is") {
      topCat = "IS";
        content.updateContent(topCat);
        res.redirect('dwpDecisionDecs');
    } else if (bens == "esa") {
      topCat = "ESA";
        content.updateContent(topCat);
        res.redirect('dwpDecisionDecs');
    } else if (bens == "jsa") {
      topCat = "JSA";
        content.updateContent(topCat);
        res.redirect('dwpDecisionDecs');
    } else if (bens == "pc") {
      topCat = "PC";
        content.updateContent(topCat);
        res.redirect('dwpDecisionDecs');
    } else if (bens == "no") {
        res.redirect('pregnant');
    }      

    
});
