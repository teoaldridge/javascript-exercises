string=String(prompt("Please type something"));
num=parseInt(prompt("enter a number"));

const repeatString = function(string, num) {
   
    if (num<0){
    return "ERROR";
    } else {
    console.log(string.repeat(num))
    return string.repeat(num);
    }   
};

repeatString(string, num);

// Do not edit below this line
module.exports = repeatString;
