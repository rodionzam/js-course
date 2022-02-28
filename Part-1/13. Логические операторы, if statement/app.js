// >, <, >=, <=, ==, ===, !=, !==

let value;

value = 1 > 2; // false
value = 2 <= 2; // true
value = 1 == 1; // true
value = 1 == '1'; // true - т.е. не строгое равенство, не проверяет на тип данных и преобразует строку в число
value = 1 === '1'; // false - строгое равенство сравнивает и типы данных
value = 'a' > 'a'; // false
value = 'a' > 'A'; // true - a имеет больший юникод чем A
value = 'a'.charCodeAt(); // 97 - юникод символа a
value = 'A'.charCodeAt(); // 65 - юникод символа A
value = 'a' > 'ab'; // false - так же строки сравниваются посимвольно

console.log(value);

value2 = 10;

if (value2 === 10) {
    console.log('value: 10');
} else {
    console.log('else');
}

if (value2) { // Проверка, есть ли value2
    console.log('some action', value2);
} else { // если value2 = null, '', 0, NaN выполнится else
    console.log('else', value2);
}

// ||, &&, !

value3 = null;

if (!value3) { // Тоже самое что value3 === null
    console.log(value3);
}

value4 = [];

if (value4) { // Будет true, потому что пустой массив или объект, считается true
    console.log(value4);
}

value5 = [];

if (value5.length) { // Добавляем length, проверка на пустой массив
    console.log(value5);
} else {
    console.log('array is empty');
}

if (Array.isArray(value5)) { // Array.isArray() - функция для проверки является ли значение массивом или нет
    console.log('is array');
} else {
    console.log('is not array');
}

let user = {
    name: 'Rodion'
};

if (user.name) { // Проверяем есть ли значение у свойства
    console.log(user.name);
} else {
    console.log('else');
}

if (user.hasOwnProperty('name')) { // hasOwnProperty - этот метод проверяет наличие свойства у объекта, но этот метод не проверяет значение свойства
    // если будет 'name: null', то метод всё равно вернёт true
    // а способ выше, вернёт false
    console.log(user.name);
} else {
    console.log('else');
}

let serverNickname = '';
let nickname = serverNickname || 'default nickname'

console.log(nickname); // т.к. пришла пустая строка default nickname

/* ДЗ */
console.log('Домашнее задание');

// Задание 1
let a;
a = 0 || 'string'; // string - первое правдивое (0 = false, 'string' = true)
a = 1 && 'string'; // string - последнее правдивое, т.к. нет ложных (1 = true, 'string' = true)
a = null || 25; // 25 - первое правдивое (null = false, 25 = true)
a = null && 25; // null - первое ложное (null = false, 25 = true)
a = null || 0 || 35; // 35 - первое правдивое (null = false, 0 = false, 25 = true)
a = null && 0 && 35; // null - первое ложное значение (null = false, 0 = false, 25 = true)

console.log(a);

// Задание 2
let b;
b = 12 + 14 + '12'; // 2612 - сложил 12 и 14 = 26, при сложении со строкой, преобразует 26 в строку и сложил 26 и 12 как строки, получив строковое значение 2612
b = 3 + 2 - '1'; // 4 - сложил 3 и 2, получилось 5, при вычитании со строкой, преобразует строку в число, 5 - 1 = 4
b = '3' + 2 - 1; // 31 - при сложении преобразуем 2 в строку, получаем 32 и при вычитании 32 преобразуем в число 32 - 1 = 31
b = true + 2; // 3 - true при сложении и вычитании с числом, преобразуется в число, т.е. в 1, 1 + 2 = 3
b = +'10' + 1; // 11 - перед строкой плюс, преобразует строку в число 10 + 1 = 11
b = undefined + 2; // NaN - т.к. undefined преобразуется в NaN, NaN + 2 = NaN
b = null + 5; // 5 - null преобразуется в 0
b = true + undefined; // NaN - true преобраезуется в 1, а undefined в NaN, 1 + NaN = NaN

console.log(b);

// Ответ преподавателя
// "2612". сначала происходит сложение 12 + 14 после происходит конкатенация со строкой
console.log(12 + 14 + '12')
// 4. При любых математических операциях со строкой кроме сложения строка преобразуется к числу
// поэтому пры вычитании строки "1" она преобразовалась в число 1
console.log(3 + 2 - '1')
// 31. сначала произошла конкатенация и получилась строка "32" и при вычитании получили число 31
console.log('3' + 2 - 1)
// 3. true при числовом преобразовании становится 1
console.log(true + 2)
// 11. унарный плюс превращает строку в число и происходит сложение чисел
console.log(+'10' + 1)
// NaN. при любый математических операциях с undefined кроме сложения со строкой, результат будет NaN
console.log(undefined + 2)
// 5. null преобразуется к нулю
console.log(null + 5)
// NaN. при любый математических операциях с undefined кроме сложения со строкой, результат будет NaN
console.log(true + undefined)

// Задание 3
let block = 'hidden';
if (block === 'hidden') {
    block = 'visible';
} else {
    block = 'hidden';
}

console.log(block);

// Задание 4
let number = 0;
if (number === 0) {
    number = 1;
} else if (number < 0) {
    number = 'less then zero';
} else {
    number *= 10;
}

console.log(number);

// Задание 5
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };

if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}

console.log(car);

// Задание 6
let item = { name: 'Intel core i7', price: '100$', discount: '15%' };
const itemPrice = Number(item.price.replace(/[^0-9]/g, ''));
const itemDiscount = Number(item.discount.replace(/[^0-9]/g, ''));

if (item.discount && item.price) {
    item.priceWithDiscount = itemPrice - itemPrice * itemDiscount / 100;
    console.log(item.priceWithDiscount);
} else if (!item.discount) {
    console.log(item.price);
}

// Ответ преподавателя

let item2 = { name: 'Intel core i7', price: '100$', discount: '15%' }
// мы выносим цену и скидку в отдельные переменные что бы несколько раз не вызывать parseFloat
const price = parseFloat(item2.price);
const discount = parseFloat(item2.discount);
// проверяем что цена и скинда не являются NaN так как это важно при расчетах
if (!isNaN(price) && !isNaN(discount)) {
    const priceWithDiscount = price - (price * (discount / 100));
    console.log(priceWithDiscount)
} else {
    console.log(price);
}

// Задание 7
let product = { name: 'Яблоко', price: '10$' };
let min = 10; // минимальная цена
let max = 20; // максимальная цена

const productPrice =Number(product.price.replace(/[^0-9]/g, ''));

if (productPrice >= min && productPrice <= max) {
    console.log(product.name);
} else {
    console.log('товаров не найдено.');
}