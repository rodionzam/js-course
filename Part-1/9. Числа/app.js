// Numbers
const num1 = 10;
const num2 = 20;
let value;

value = num1 + num2; // 30

value = value + 100; // 130
value += 100; // 130 - это та же строка что и выше

value = 4 % 2; // 0 - % остаток от деления
value = 5 % 2; // 1

value++; // прибавит 1, изменение произойдёт на следующей строке
value--; // убавит 1, изменение произойдёт на следующей строке
++value; // прибавит 1, изменение произойдёт на этой же строке
--value; // убавит 1, изменение произойдёт на этой же строке

value = 0.6 + 0.7; // 1.2999999999999998 - но должно быть 1.3, как получить смотри ниже
value = parseFloat(value.toFixed(1)); // 1.3 - округляем с помощью метода toFixed и преобразуем в число через parseFloat
value = ( 0.6 * 10 + 0.7 * 10 ) / 10;

// Math - объект
value = Math;
value = Math.PI; // PI - свойство, свойства вызываются через точку без скобок
value = Math.random(); // random() - рандом от 0 до 1 - метод, методы это функции записанные в свойства объекта
value = Math.round(2.4); // 2 - round() - округляет до 0.5 в меньшую сторону, после в большую
value = Math.ceil(2.1); // 3 - ceil() - округляет всегда в большую сторону
value = Math.floor(2.9); // 2 - floor() - округляет всегда в меньшую сторону
value = Math.min(2, 12, 15, 0, 12); // 0 - min() - возвращает минимальное число из списка, max() - максимальное

value = Math.floor(Math.random() * 10 + 1); // рандом от 1 до 10, умножаем на 10, прибавляем 1 и округляем в меньшую сторону

console.log(value);

// Получаем рандомный цвет из массива
const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];
value = Math.floor(Math.random() * arr.length);

console.log(value, arr[value]);

/* ДЗ */
console.log('Домашнее задание');

console.log('1. Получить число pi из Math и округлить его до 2-х знаков после точки');
let value1 = parseFloat((Math.PI).toFixed(2));
console.log(value1);

console.log('2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51');
let value2 = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value2);
let value3 = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value3);

console.log('3. Работа с Math.random:');
// a. Получить случайное число и округлить его до двух цифр после запятой,
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
let value4 = parseFloat((Math.random() * 10).toFixed(2));
console.log(value4);
let value5 = Math.floor(Math.random() * 10 + 1);
console.log(value5);

console.log('4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?');
let value6 = parseFloat((0.6 + 0.7).toFixed(1));
console.log(value6);

console.log('5. Получить число из строки \'100$\'');
let value7 = parseInt('100$');
console.log(value7);