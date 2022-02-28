let value;

// Number to string
value = String(10); // 10
value = String(10+40); // 50
value = (40).toString(); // 40

// Boolean to string
value = String(false); // false

// Array to string
value = String([1, 2, 3]); // 1,2,3

// Object to string
value = String({ name: 'Denis' }); // [object Object]

value = 30 + '' + undefined; // 30undefined
value = 30 - '5'; // 25
value = true + 10; // 11
value = true + undefined; // NaN

// String to number
value = Number('23'); // 23
value = Number(true); // 1
value = Number(null); // 0
value = Number('false'); // NaN
value = Number([1, 2, 3]); // NaN

value = parseInt('200'); // 200
value = parseInt('200asd'); // 200
value = parseInt('asd200asd'); // NaN

value = parseFloat('200.212px'); // 200.212

//Boolean
value = Boolean('hello'); // true - любая строка или просто пробел, будет считаться true, но пустая строка будет считаться как false
value = Boolean(''); // false
value = Boolean(-100); // true - любое число как положительное так и отрицательное будет считаться true, но 0 будет как false
value = Boolean(0); // false
value = Boolean(undefined); // false
value = Boolean(null); // false
value = Boolean({}); // true
value = Boolean([]); // true

console.log(value);
console.log(typeof value);