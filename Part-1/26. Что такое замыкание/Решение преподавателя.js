//1
function minus(num1 = 0) {
  return function (num2 = 0) {
    return num1 - num2;
  }
}

console.log(minus(2)(1))

//2
function multiplyMaker(num1 = 2) {
  return function (num2 = 1) {
    return num1 *= num2;
  }
}

const multiply = multiplyMaker(2);
console.log(multiply(2))
console.log(multiply(2))

//3
const strModule = (function (){
  let str = '';

  function setStr(val = '') {
    str = String(val);
  }

  function getStr() {
    return str;
  }

  function getStrLength() {
    return str.length;
  }

  function getReverseStr() {
    return str.split('').reverse().join('');
  }

  return {
    setStr,
    getStr,
    getStrLength,
    getReverseStr
  }
}());

//4
const numModule = (function (){
  let num = 0;

  function setNumber(val = 0) {
    num = Number(val);
    return this;
  }

  function plus(val) {
    num += Number(val);
    return this;
  }

  function minus(val) {
    num -= Number(val);
    return this;
  }

  function devide(val) {
    num /= Number(val);
    return this;
  }

  function pow(ex = 2) {
    num = Math.pow(num, ex);
    return this;
  }

  function getNumber() {
    return  Number(num.toFixed(2)) || 0;
  }

  return {
    setNumber,
    plus,
    minus,
    devide,
    pow,
    getNumber
  }
}());

console.log(
    numModule
        .setNumber(3)
        .pow(2)
        .getNumber()
)