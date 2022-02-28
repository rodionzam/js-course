/*
* Задание 1
* На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.
*/

console.log('Задание 1');

const str1 = 'i am in the easycode';
let strEdit1 = '';

for (let i1 = 0; i1 < str1.length; i1++) {
    if(i1 === 0 || str1[i1 - 1] === ' ') {
        strEdit1 += str1[i1].toUpperCase();
        continue;
    }

    strEdit1 += str1[i1];
}

console.log(strEdit1);

// Ответ преподавателя
/*
let str = 'i am in the easycode';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
}

console.log(res);
*/

/*
* Задание 2
* Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
*/

console.log('');
console.log('Задание 2');

const str2 = 'tseb eht ma i';
let strEdit2 = '';

for (let i2 = str2.length - 1; i2 > 0; i2--) {
    strEdit2 += str2[i2];
}

console.log(strEdit2);

// Ответ преподавателя
/*
let str = 'tseb eht ma i';
let res = '';

for (let i = str.length; i--;) {
  res += str[i];
}

console.log(res);
*/

/*
* Задание 3
* Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
*/

console.log('');
console.log('Задание 3');

const int1 = 10;
let intFac = 1;

for (let i3 = 2; i3 <= int1; i3++) {
    intFac *= i3;
}

console.log(intFac);

// Ответ преподавателя
/*
let res = 1;

for (let i = 1; i <= 10; i++) {
  res *= i;
}
*/

/*
* Задание 4
* На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
*/

console.log('');
console.log('Задание 4');

const str3 = 'JavaScript is a pretty good language';
let strEdit3 = '';

for (let i4 = 0; i4 < str3.length; i4++) {
    if(str3[i4] === ' ') {
        continue;
    }

    if(i4 === 0 || str3[i4 - 1] === ' ') {
        strEdit3 += str3[i4].toUpperCase();
        continue;
    }

    strEdit3 += str3[i4];
}

console.log(strEdit3);

// Ответ преподавателя
/*
let str = 'JavaScript is a pretty good language';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else if (str[i] !== ' '){
    res += str[i];
  }
}

console.log(res);
*/

/*
* Задание 5
* Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
*/

console.log('');
console.log('Задание 5');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of arr) {
    if (value % 2 === 0) {
        console.log(value);
    }
}

// Ответ преподавателя
/*
let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let num of arr) {
  if (num % 2) {
    console.log(num);
  }
}
*/

/*
* Задание 6
* Дан объект:
*
* let list = {
*   name: 'denis',
*   work: 'easycode',
*   age: 29
* }
*
* Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
*/

console.log('');
console.log('Задание 6');

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let key in list) { // for in служит для перебора объектов
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
    }
}

console.log(list);