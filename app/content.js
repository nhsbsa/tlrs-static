var content = {
  description : 'Box "D" (has a valid maternity exemption certificate)',
  title : 'Income support',
  checkDate : "1 November and 30 November 2017",
  challengeDate : "9 February 2018",
  ucAmount : 435,
    pregnant : "no",
   
  updateContent : function (cat) {
    switch(cat) {
      case "IS":
        this.title = 'Income Support';
            this.hasBen = 'yes';
            this.benType = 'IS';
        break;
      case "ESA":
        this.title = 'Income-related Employment and Support Allowance';
            this.hasBen = 'yes';
            this.benType = 'ESA';
        break;
      case "JSA":
        this.title = 'Income based Jobseekers Allowance';
            this.hasBen = 'yes';
            this.benType = 'JSA';
        break;
      case "PC":
        this.title = "Your partner's Pension Credit guarantee credit award";
            this.hasBen = 'yes';
            this.benType = 'PC';
        break;
      case "UC":
        this.title = "Universal Credit";
            this.hasBen = 'yes';
            this.benType = 'UC';
        break;
      default:
        this.title = "none";
        this.hasBen = "none";
            
    }
  }
};



module.exports.content = content;