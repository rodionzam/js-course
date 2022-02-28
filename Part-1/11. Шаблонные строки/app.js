const firstName = 'Rodion';
const lastName = 'Zamyatin';
const age = '29';

let str;

str = 'Hello my name is ' + firstName + ' ' + lastName; // Hello my name is Rodion Zamyatin

console.log(str);

str = '<ul>' +
    '<li>First name: ' + firstName + '</li>' +
    '<li>Last name: ' + lastName + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '</ul>';

// Запись выше но на ES6
str = `
    <ul>
        <li>First name: ${ firstName }</li>
        <li>Last name: ${ lastName }</li>
        <li>Age: ${ age }</li>
        <li>Math.random: ${ Math.random() }</li>
        <li>5 + 5: ${ 5 + 5 }</li>
    </ul>
`;

document.body.innerHTML = str;

/* ДЗ */
console.log('Домашнее задание');

let string = "some test string";

console.log('1. Получить первую и последнюю буквы строки');
const firstLetter = string[0];
console.log(firstLetter);
const lastLetter = string[string.length - 1];
console.log(lastLetter);

console.log('2. Сделать первую и последнюю буквы в верхнем регистре');
const firstLetterUpperCase = string[0].toUpperCase();
const lastLetterUpperCase = string[string.length - 1].toUpperCase();
const stringUpperCase = firstLetterUpperCase + string.slice(1, -1) + lastLetterUpperCase;
console.log(stringUpperCase);

console.log('3. Найти положение слова ‘string’ в строке');
const indexString = string.indexOf('string');
console.log(indexString);

console.log('4. Найти положение второго пробела (“вручную” ничего не считать)');
const indexWhitespace = string.indexOf(' ', string.indexOf(' ') + 1);
console.log(indexWhitespace);

console.log('5. Получить строку с 5-го символа длиной 4 буквы');
const sliceString4 = string.slice(5, 5+4);
console.log(sliceString4);

console.log('6. Получить строку с 5-го по 9-й символы');
const indexString5_9 = string.slice(5, 9);
console.log(indexString5_9);

console.log('7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)');
const indexString6 = string.slice(0, -6);
console.log(indexString6);

console.log('8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”');
const a = 20;
const b = 16;
const stringAB = a + '' + b;
console.log(stringAB);