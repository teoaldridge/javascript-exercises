const ftoc = function(f) {
  c=(f-32)*(5/9);
  roundedC=Math.round(c*10)/10;
  return roundedC;
};

const ctof = function(c) {
  f=c*(9/5)+32;
  roundedF=Math.round(f*10)/10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
