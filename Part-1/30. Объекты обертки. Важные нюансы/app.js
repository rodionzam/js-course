let str = 'Hello world';
console.log(str.slice(1, -1)); // ello worl

console.dir(String);
// ƒ String()
//     fromCharCode: ƒ fromCharCode()
//     fromCodePoint: ƒ fromCodePoint()
//     length: 1
//     name: "String"
//     prototype: String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
//     raw: ƒ raw()
//     arguments: (...)
//     caller: (...)
//     [[Prototype]]: ƒ ()
//     [[Scopes]]: Scopes[0]

// В свойстве prototype мы можем увидеть все методы которые можем применять к объекту

const strObj = new String('hello');
console.log(strObj);
// String {'hello'}
//     0: "h"
//     1: "e"
//     2: "l"
//     3: "l"
//     4: "o"
//     length: 5
//     [[Prototype]]: String
//     [[PrimitiveValue]]: "hello"

console.dir(Number);
// ƒ Number()
//     EPSILON: 2.220446049250313e-16
//     MAX_SAFE_INTEGER: 9007199254740991
//     MAX_VALUE: 1.7976931348623157e+308
//     MIN_SAFE_INTEGER: -9007199254740991
//     MIN_VALUE: 5e-324
//     NEGATIVE_INFINITY: -Infinity
//     NaN: NaN
//     POSITIVE_INFINITY: Infinity
//     isFinite: ƒ isFinite()
//     isInteger: ƒ isInteger()
//     isNaN: ƒ isNaN()
//     isSafeInteger: ƒ isSafeInteger()
//     length: 1
//     name: "Number"
//     parseFloat: ƒ parseFloat()
//     parseInt: ƒ parseInt()
//     prototype: Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
//     arguments: (...)
//     caller: (...)
//     [[Prototype]]: ƒ ()
//     [[Scopes]]: Scopes[0]