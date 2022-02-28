let a = 1;
let b = 0;

/*if (a > 0) {
    b = a;
} else {
    b += 1;
}*/

// выражение ? если true : если false

// Можно расширить тернарное выражение, но на правктике не стоит так делать, т.к. плохо читается
// выражение ? если true : выражение ? если true : если false

let c = a > 0 ? b = a : b += 1; // В данном случае тернарный оператор вернёт b = 1 (хотя b у нас 0) и c так же будет 1

console.log(`b: ${b}, c: ${c}`);

// Поэтому лучше писать так:
b = a > 0 ? a : b + 1;

console.log(`b: ${b}`);

// Конструкция switch case
let color = 'orange';

switch (color) {
    case 'yellow':
    case 'orange':
        console.log('Color is yellow or orange');
        break;
    case 'red':
        console.log('Color is red');
        break;
    default:
        console.log('Default');
}

/* ДЗ */
console.log('Домашнее задание');

// Задание 1
let a2 = 'block';

switch (a2) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
}

// Задание 2
let b2 = 'hidden';

b2 === 'hidden' ? b2 = 'visible' : b2 = 'hidden';
console.log(b2);

// Ответ преподавателя
/*let b = 'hidden';

b = b === 'hidden' ? 'visible' : 'hidden';*/

// Задание 3
let c2 = 0;

c2 === 0 ? c2 = 1 : c2 < 0 ? c2 = 'less then zero' : c2 *= 10;
console.log(c2);

// Ответ преподавателя
/*c = c === 0 ? 1 : c < 0 ? 'less then zero' : c * 10;*/