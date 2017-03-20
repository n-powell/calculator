var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

var bmi = function(height,weight) {
  var mheight = height*.025;
  var mweight = weight*0.45;
  return mweight / (mheight^2);
}

var CtoF = function(temp) {
  return temp * 9/5 + 32;
}

var FtoC = function(temp) {
  return (temp - 32) * (5/9);
}

var gallonsToLiters = function(volume) {
  return volume * 3.78541;
}

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = bmi(number1, number2);

alert(result);
