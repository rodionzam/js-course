const firstName = 'Rodion';
const lastName = 'Zamyatin';
const age = '29';
const str = 'Hello my name is Rodion';

let value;

value = firstName + lastName; // RodionZamyatin
value = firstName + ' ' + lastName; // Rodion Zamyatin
// value = value + ' I am ' + age; // Rodion Zamyatin I am 29
value += ' I am ' + age; // Сокращение строки выше

value = firstName.length; // 6 - length - свойство строки, показывающее количество символов
value = firstName[2]; // d - второй символ
value = firstName[firstName.length - 1]; // Последний символ строки

value = firstName.toUpperCase(); // RODION
value = firstName.concat(' ', lastName); // Rodion Zamyatin

value = str.indexOf('n'); // 9 - индекс первой буквы n в строке
value = str.indexOf('n', 10); // 22 - индекс первой буквы n, начиная поиск с десятого символа в строке
value = str.indexOf('my'); // 6
value = str.indexOf('!'); // -1 - -1 означает что нет совпадений в строке
value = str.lastIndexOf('n'); // 22 - lastIndexOf ищет с конца
value = str.includes('my'); // true - includes - возвращает булевое значение, true если есть совпадение false если нет
//Данные методы чувствительны к регистру

value = str.slice(0, 5); // Hello - slice - вырезает из строки с 0го по 5й индекс символы
value = str.slice(0); // Вернёт всю строку
value = str.slice(5); // Вернёт строку с 5го индекса и до конца
value = str.slice(0, -3); // Вернёт строку с 0го индекса и 3го с конца

const substr = str.substr(5, 4); // Вернёт строку с 5го символа длинной 4 символа
console.log(substr);

value = str.replace('Rodion', 'Rodya');

console.log(value);